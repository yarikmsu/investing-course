#!/usr/bin/env bash
# Проверка собранного сайта (_site) на регрессии рендеринга, которые
# markdown-гейт (check-parity.py) увидеть не может, потому что они
# возникают только после прохода через kramdown/Jekyll.
#
#   1. Экранированные теги <details>/<summary> в ТЕКСТЕ страницы — признак
#      того, что квизы сломаны (ответы видны всегда, в тексте мусор).
#      Проверяются только .html-страницы, и содержимое <code>/<pre>
#      игнорируется — легитимное упоминание тега в инлайн-коде (например,
#      в CHANGELOG) не должно давать ложное срабатывание.
#   2. Невалидный search-data.json — поиск по сайту молча не работает.
#
# Использование: scripts/check-built-html.sh <каталог _site>
set -euo pipefail
SITE="${1:-_site}"
fail=0

echo "→ Проверка на экранированные теги <details>/<summary> (вне <code>/<pre>)…"
offenders="$(python3 - "$SITE" <<'PY'
import re, sys, pathlib
site = pathlib.Path(sys.argv[1])
strip = re.compile(r'<code[^>]*>.*?</code>|<pre[^>]*>.*?</pre>', re.S)
bad = re.compile(r'&lt;/summary&gt;|&lt;/details&gt;|&lt;summary&gt;&lt;')
hits = []
for f in site.rglob('*.html'):
    text = strip.sub('', f.read_text(encoding='utf-8', errors='ignore'))
    if bad.search(text):
        hits.append(str(f))
print('\n'.join(hits))
PY
)"
if [ -n "$offenders" ]; then
  echo "❌ Найдены экранированные теги квизов вне кода — рендеринг <details> сломан (нужен <summary markdown=\"span\">):"
  echo "$offenders"
  fail=1
else
  echo "✅ Экранированных тегов квизов нет."
fi

echo "→ Проверка search-data.json на валидность JSON…"
for j in $(find "$SITE" -name search-data.json); do
  if ! head -c 1 "$j" | grep -q '{'; then
    echo "❌ $j не является JSON (вероятно, обёрнут в HTML-layout) — поиск по сайту не работает."
    fail=1
  fi
done
[ "$fail" = 0 ] && echo "✅ search-data.json валиден." || true

exit "$fail"
