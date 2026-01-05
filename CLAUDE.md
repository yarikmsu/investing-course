# Руководство по контенту

## О проекте

Двуязычный образовательный курс по инвестированию в США:
- 🇷🇺 **Русская версия** (`/ru/`) — для русскоязычных инвесторов
- 🇺🇸 **English version** (`/en/`) — for English-speaking investors

Целевая аудитория: резиденты США, нерезиденты и россияне.

## Структура репозитория

```
investing-course/
├── index.html          # Лендинг с выбором языка
├── CLAUDE.md           # Это руководство
├── ru/                 # 🇷🇺 Русская версия
│   ├── _config.yml
│   ├── index.md
│   └── module-*/
└── en/                 # 🇺🇸 English version
    ├── _config.yml
    ├── index.md
    └── module-*/
```

---

## Философия курса (общая)

- **Пассивное инвестирование** (Bogleheads)
- **Индексные ETF** — главный инструмент
- **Долгосрочность** — 10+ лет
- **Простота** — 2-4 ETF достаточно

## Правила контента (общие)

**Включать:**
- Конкретные примеры с цифрами
- ETF с тикерами (VOO, VTI, QQQ, BND)
- Пошаговые инструкции
- Предупреждения о рисках

**Избегать:**
- Рекомендаций конкретных акций
- Обещаний доходности
- Продвижения активного трейдинга
- Устаревшей информации без пометок

**Дисклеймеры (обязательно):**
- «Это образовательный материал, а не финансовый совет»
- Дата актуальности для данных, которые устаревают

---

## 🇷🇺 Русская версия

### Стиль и тон
- Русский язык, понятный широкой аудитории
- Избегать излишнего жаргона, объяснять термины
- Англоязычные термины там, где стандартны (ETF, P/E, DRIP)
- Обращение на «вы», тон спокойный и ободряющий
- Markdown, короткие абзацы, списки, таблицы, ASCII-схемы

### Ссылки
- Формат: `/investing-course/ru/PAGE/`
- Пример: `/investing-course/ru/module-01-introduction/`

### Целевые аудитории

1. **Резиденты США** (основная)
   - IRA, 401(k), Roth IRA, HSA
   - Брокеры: Fidelity, Schwab, Vanguard

2. **Нерезиденты США** → `NON-RESIDENTS.md`
   - Interactive Brokers
   - W-8BEN и налоги

3. **Россияне** → `RUSSIA.md`
   - Санкционные ограничения
   - Налоговая отчётность в РФ

### Коммиты
- На русском языке
- Описывать, что изменено и зачем

---

## 🇺🇸 English version

### Style and tone
- Clear, beginner-friendly English
- Avoid jargon, explain terms when first used
- Standard US investing terminology
- Professional but approachable tone
- Markdown, short paragraphs, lists, tables, ASCII diagrams

### Links
- Format: `/investing-course/en/PAGE/`
- Example: `/investing-course/en/module-01-introduction/`

### Target audience

1. **US Residents** (primary)
   - IRA, 401(k), Roth IRA, HSA
   - Brokers: Fidelity, Schwab, Vanguard

2. **Non-US Residents** → `NON-RESIDENTS.md`
   - Interactive Brokers
   - W-8BEN and tax treaties

### Not included

- ❌ **No Russia-specific content** — no RUSSIA.md, no sanctions info, no Russian tax reporting
- English version is for international audience excluding Russia

### Commits
- In English
- Describe what changed and why

---

## Обновление данных

**Актуальность: январь 2026**

Все данные должны быть актуальны:
- Налоговые лимиты (IRA, 401(k), HSA) — 2025/2026 год
- Брокеры и их условия
- Внешние сервисы (калькуляторы, приложения)
- Ситуация для россиян (только в RU-версии)

Ежегодно обновлять:
- Лимиты IRA/401(k) (октябрь-ноябрь)
- Налоговые ставки (январь)
- Список брокеров

## Правила форматирования

**Ссылки:**
- НЕ размещать ссылки внутри блоков кода (```)
- Если нужна ссылка рядом с ASCII-схемой — выносить за пределы блока

```markdown
# ❌ Неправильно (ссылка внутри блока кода):
Россиянин:
└── См. [RUSSIA](/investing-course/ru/RUSSIA/)

# ✅ Правильно (ссылка снаружи):
Россиянин:
└── См. ссылку ниже

> 📖 Подробнее: [RUSSIA](/investing-course/ru/RUSSIA/)
```

## Синхронизация версий

При обновлении контента:
1. Обновить основную версию (RU или EN)
2. Отметить в коммите, что нужен перевод
3. Перевести изменения во вторую версию
4. Сохранять одинаковую структуру файлов

**Приоритет:** Русская версия — основная, английская — перевод.
