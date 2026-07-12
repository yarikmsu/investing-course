#!/usr/bin/env python3
"""CI-гейт качества: битые внутренние ссылки и расхождение структуры RU/EN.

Проверки (падают с exit 1):
  1. Внутренние ссылки. Каждая markdown-ссылка вида
     /investing-course/{ru,en}/PAGE/ должна соответствовать permalink,
     объявленному во front matter какого-либо файла этого языка.
     Относительные ссылки на .md-файлы запрещены (CLAUDE.md): на
     опубликованном сайте они ведут на 404.
     Относительные ссылки вида ./PAGE/ резолвятся от permalink страницы.
  2. Паритет файлов RU ↔ EN. Наборы .md-файлов должны совпадать,
     кроме белого списка (RUSSIA.md существует только в ru/).

Предупреждения (не валят сборку, печатаются в лог):
  3. Скелет заголовков. Последовательность уровней заголовков (##, ###)
     в паре ru/X.md ↔ en/X.md должна совпадать — перевод не меняет
     структуру. Сейчас известен дрейф (TLDR, INVESTOR-STORIES — бэклог
     BL-402); после его устранения проверку можно сделать строгой
     флагом --strict-headings.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LANGS = ("ru", "en")
# Файлы, существующие только в одном языке (политика CLAUDE.md)
FILE_WHITELIST = {"RUSSIA.md"}  # только в ru/
BASE = "/investing-course"

LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)\s]+)\)")
HEADING_RE = re.compile(r"^(#{1,6})\s", re.M)
PERMALINK_RE = re.compile(r"^permalink:\s*[\"']?([^\s\"']+)", re.M)


def front_matter(text: str) -> str:
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            return text[3:end]
    return ""


def strip_code_blocks(text: str) -> str:
    return re.sub(r"```.*?```", "", text, flags=re.S)


def collect(lang: str):
    """permalink-набор и {файл: (permalink, текст)} для языка."""
    pages = {}
    permalinks = set()
    for p in sorted((ROOT / lang).rglob("*.md")):
        text = p.read_text(encoding="utf-8")
        m = PERMALINK_RE.search(front_matter(text))
        permalink = m.group(1) if m else None
        if permalink:
            permalinks.add(permalink.rstrip("/") + "/" if permalink != "/" else "/")
        pages[p.relative_to(ROOT / lang).as_posix()] = (permalink, text)
    return permalinks, pages


def check_links(errors):
    perma = {lang: collect(lang)[0] for lang in LANGS}
    for lang in LANGS:
        _, pages = collect(lang)
        for rel, (permalink, text) in pages.items():
            body = strip_code_blocks(text)
            for target in LINK_RE.findall(body):
                target = target.split("#", 1)[0]
                if not target or target.startswith(("http://", "https://", "mailto:")):
                    continue
                loc = f"{lang}/{rel}"
                # Запрещённые относительные .md-ссылки
                if target.endswith(".md") or ".md#" in target:
                    errors.append(f"{loc}: относительная .md-ссылка `{target}` — на сайте это 404; используйте /investing-course/{lang}/PAGE/")
                    continue
                if target.startswith(BASE):
                    tail = target[len(BASE):]
                    # /investing-course/ — лендинг
                    if tail in ("", "/"):
                        continue
                    tlang, _, page = tail.lstrip("/").partition("/")
                    if tlang not in LANGS:
                        errors.append(f"{loc}: ссылка `{target}` — неизвестный раздел `{tlang}`")
                        continue
                    norm = "/" + page if page.startswith(tuple()) else "/" + page
                    norm = norm if norm.endswith("/") or norm == "/" else norm + "/"
                    if norm == "//":
                        norm = "/"
                    if norm not in perma[tlang]:
                        errors.append(f"{loc}: ссылка `{target}` не соответствует ни одному permalink в {tlang}/")
                elif target.startswith("./") or not target.startswith("/"):
                    # относительная ссылка на каталог — резолвим от permalink страницы
                    base_path = permalink or "/"
                    parts = [seg for seg in base_path.strip("/").split("/") if seg]
                    for seg in target.lstrip("./").rstrip("/").split("/"):
                        if seg == "..":
                            parts = parts[:-1]
                        elif seg and seg != ".":
                            parts.append(seg)
                    norm = "/" + "/".join(parts) + "/" if parts else "/"
                    if norm not in perma[lang]:
                        errors.append(f"{loc}: относительная ссылка `{target}` (→ {norm}) не находит permalink в {lang}/")
                # прочие абсолютные пути (/assets/ и т.п.) не проверяем


def check_file_parity(errors):
    sets = {}
    for lang in LANGS:
        sets[lang] = {p.relative_to(ROOT / lang).as_posix() for p in (ROOT / lang).rglob("*.md")}
    only_ru = sets["ru"] - sets["en"] - FILE_WHITELIST
    only_en = sets["en"] - sets["ru"]
    for f in sorted(only_ru):
        errors.append(f"паритет файлов: ru/{f} не имеет пары en/{f}")
    for f in sorted(only_en):
        errors.append(f"паритет файлов: en/{f} не имеет пары ru/{f} (EN — перевод RU)")
    if "RUSSIA.md" in sets["en"]:
        errors.append("паритет файлов: en/RUSSIA.md запрещён политикой CLAUDE.md")


def check_heading_skeletons(warnings):
    _, ru_pages = collect("ru")
    _, en_pages = collect("en")
    for rel in sorted(set(ru_pages) & set(en_pages)):
        ru_sk = [len(m) for m in HEADING_RE.findall(strip_code_blocks(ru_pages[rel][1]))]
        en_sk = [len(m) for m in HEADING_RE.findall(strip_code_blocks(en_pages[rel][1]))]
        if ru_sk != en_sk:
            warnings.append(
                f"скелет заголовков: ru/{rel} ({len(ru_sk)} заголовков) ≠ en/{rel} ({len(en_sk)}) — перевод разошёлся со структурой оригинала"
            )


def main():
    strict_headings = "--strict-headings" in sys.argv
    errors, warnings = [], []
    check_links(errors)
    check_file_parity(errors)
    check_heading_skeletons(warnings)

    for w in warnings:
        print(f"⚠️  WARN: {w}")
    for e in errors:
        print(f"❌ FAIL: {e}")
    print(f"\nИтог: {len(errors)} ошибок, {len(warnings)} предупреждений")
    if errors or (strict_headings and warnings):
        sys.exit(1)


if __name__ == "__main__":
    main()
