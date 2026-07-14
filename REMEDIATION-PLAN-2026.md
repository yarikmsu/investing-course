# 2026 Data Refresh & Gap-Fill — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the bilingual US investing course current to mid-2026 — refresh all stale tax figures to IRS 2026 values, add the two missing substantive sections (non-resident US estate tax; OBBBA tax-law primer), correct a handful of factual errors, and mirror everything RU → EN.

**Architecture:** This is a Jekyll/GitHub-Pages Markdown content repo (`ru/` is the primary version, `en/` is the translation per the project content guidelines). There is no code or unit-test harness, so each task's verification is a `grep` assertion (the stale string is gone, the new string is present) plus the CI build in `.github/workflows/deploy.yml`. RU is authored first; EN mirrors it. The `en/` version must **not** contain Russia-specific content (per the project content guidelines).

**Tech Stack:** Markdown (kramdown/GFM), Jekyll, GitHub Pages. No build dependencies assumed locally; correctness is verified by `grep` + CI.

**Critical execution rule — financial accuracy:** Every dollar figure in this plan reflects the author's best knowledge of IRS 2026 numbers (released Nov 2025) and the OBBBA (signed July 2025), but **each figure MUST be confirmed against the cited primary source (IRS.gov / Treasury) before the commit step of its task.** If a confirmed value differs from this plan, use the confirmed value and note the correction in the commit message. This matches the course's own disclaimer ethos ("проверяйте актуальную информацию на официальных источниках").

---

## Verified-figures reference (single source of truth for Phase 1)

These are used by multiple tasks below. Confirm each against the cited source during the task that first uses it.

| Item | OLD (in course, 2025/2024) | NEW (2026) | Primary source to confirm |
|---|---|---|---|
| 401(k)/403(b) elective deferral | $23,500 | **$24,500** | IRS Notice (Nov 2025 COLA) |
| 401(k) catch-up 50+ | $7,500 | **$8,000** | same |
| 401(k) catch-up 60–63 (SECURE 2.0) | (not shown) | **$11,250** | same |
| IRA contribution | $7,000 | **$7,500** | same |
| IRA catch-up 50+ | $1,000 | **$1,100** | same |
| HSA self-only | $4,300 | **$4,400** | IRS Rev. Proc. 2025-19 |
| HSA family | $8,550 | **$8,750** | same |
| HSA catch-up 55+ | (varies) | **$1,000** (statutory, not indexed) | same |
| Total DC limit 415(c) (mega-backdoor cap) | "$69,000 (2024)" | **$72,000** | IRS Notice (Nov 2025 COLA) |
| Roth IRA phase-out — Single | $150,000–$165,000 | **$153,000–$168,000** | IRS Notice (Nov 2025 COLA) |
| Roth IRA phase-out — MFJ | $236,000–$246,000 | **$242,000–$252,000** | same |
| LTCG 0% ceiling — Single | $48,350 | **~$49,450** | IRS Rev. Proc. (2026 inflation adj.) |
| LTCG 0% ceiling — MFJ | $96,700 | **~$98,900** | same |
| QCD annual limit | "$100,000" | **$108,000 (2025) → $111,000 (2026)** [VERIFIED — Notice 2025-67] | IRS (SECURE 2.0 indexing) |
| Federal estate/gift exemption | (never stated) | **$15,000,000 (2026, OBBBA, permanent + indexed)** | OBBBA / IRS |
| Standard deduction (OBBBA) | (not stated) | **2025: $15,750 single / $31,500 MFJ; 2026 indexed** | OBBBA / IRS |
| SALT cap (OBBBA) | $10,000 (implicit) | **$40,000 (2025) → $40,400 (2026), +~1%/yr to 2029, reverts to $10,000 in 2030; phase-down >$500k MAGI** [VERIFIED] | OBBBA / CRS R48611 |
| NRA estate-tax exemption | (missing) | **$60,000 on US-situs assets, up to 40%** | IRC §2101–2107 / IRS |
| I-Bond annual limit | "$15,000 ($10k + $5k paper via tax refund)" | **$10,000 electronic only (paper/tax-refund route ended Jan 1, 2025)** | TreasuryDirect |

---

## Phase 0 — Setup

### Task 0: Branch and plan hygiene

**Files:**
- Modify: `_config.yml:65-70` (root exclude list)

- [ ] **Step 1: Create a feature branch off the current branch**

```bash
cd /Users/rugory00/work/investing-course
git checkout -b fix/2026-data-refresh
```

- [ ] **Step 2: Exclude this plan from the published site (match existing convention)**

In `_config.yml`, under the `exclude:` block (currently lists the project guidelines file, `IMPROVEMENT_PLAN.md`, `AUDIT-REPORT.md`), add the plan file. Change:

```yaml
exclude:
  - <project-guidelines>.md
  - IMPROVEMENT_PLAN.md
  - AUDIT-REPORT.md
  - "*.sh"
  - .gitignore
```

to:

```yaml
exclude:
  - <project-guidelines>.md
  - IMPROVEMENT_PLAN.md
  - AUDIT-REPORT.md
  - REMEDIATION-PLAN-2026.md
  - "*.sh"
  - .gitignore
```

- [ ] **Step 3: Verify**

Run: `grep -n "REMEDIATION-PLAN-2026.md" _config.yml`
Expected: one match in the exclude block.

- [ ] **Step 4: Commit**

```bash
git add _config.yml REMEDIATION-PLAN-2026.md
git commit -m "chore: add 2026 remediation plan, exclude from site build"
```

---

## Phase 1 — Critical data corrections (RU, primary version)

> Goal of phase: no 2025/2024 figure is presented as the live value anywhere in `ru/`. After each edit, the verification grep must show the OLD number gone from that file (or only present in clearly historical/example context) and the NEW number present.

### Task 1: Retirement-account limits in Module 4

**Files:**
- Modify: `ru/module-04-brokers-taxes/README.md` (lines ~215, 228, 240, 247, 256, 309, 355, 478-485)

- [ ] **Step 1: Confirm the 2026 limits** against the IRS Nov-2025 COLA notice and Rev. Proc. 2025-19 (HSA). Use the "Verified-figures reference" table values; correct any that differ.

- [ ] **Step 2: Update the "Актуальные лимиты 2025-2026" table** (`ru/module-04-brokers-taxes/README.md:478-485`). Replace the table so the headline year is 2026:

```markdown
### Актуальные лимиты 2026

| Счёт | Лимит 2026 | Лимит 50+ | Примечание |
|------|------------|-----------|------------|
| Traditional/Roth IRA | $7,500 | $8,600 | На человека (catch-up $1,100) |
| 401(k)/403(b) | $24,500 | $32,500 | + employer match (catch-up $8,000) |
| 401(k) catch-up 60–63 | — | до $11,250 | Усиленный catch-up (SECURE 2.0) |
| HSA (индивид.) | $4,400 | $5,400 | Требует HDHP (catch-up 55+: $1,000) |
| HSA (семья) | $8,750 | $9,750 | Требует HDHP |

> ℹ️ Лимиты на 2025 год (для справки): IRA $7,000, 401(k) $23,500, HSA $4,300/$8,550.
```

- [ ] **Step 3: Update inline limit mentions in the lesson bodies.** In the same file, replace every "live" 2025 figure with 2026:
  - `:215` Traditional IRA "Лимит 2025: $7,000 ($8,000 если 50+)" → "Лимит 2026: $7,500 ($8,600 если 50+)"
  - `:228` Roth IRA "Лимит 2025: $7,000 ($8,000 если 50+)" → "Лимит 2026: $7,500 ($8,600 если 50+)"
  - `:240` 401(k) "Лимит 2025: $23,500 ($31,000 если 50+)" → "Лимит 2026: $24,500 ($32,500 если 50+)"
  - `:256` comparison table "Лимит взноса (2025) | $7,000 | $7,000 | $23,500" → "(2026) | $7,500 | $7,500 | $24,500"
  - `:309` HSA "Лимит 2025: $4,300 (индивидуальный) / $8,550 (семья)" → "Лимит 2026: $4,400 / $8,750"
  - `:355` priority list "HSA до лимита ($4,300/$8,550)" → "($4,400/$8,750)"
  - `:349` / `:352` priority list "Roth IRA до лимита ($7,000)" → "($7,500)"; "401(k) до лимита ($23,500)" → "($24,500)"

- [ ] **Step 4: Verify**

```bash
grep -nE "\$23,500|\$7,000|\$4,300|\$8,550|\$31,000" ru/module-04-brokers-taxes/README.md
```
Expected: remaining hits only in the explicit "2025 для справки" line or worked examples that are dated; no figure presented as the current-year limit.

- [ ] **Step 5: Commit**

```bash
git add ru/module-04-brokers-taxes/README.md
git commit -m "docs(ru): update retirement-account limits to IRS 2026 values"
```

### Task 2: Roth phase-out, LTCG and ordinary-income brackets (Module 4)

**Files:**
- Modify: `ru/module-04-brokers-taxes/README.md` (lines ~491-511, 592-622)

- [ ] **Step 1: Confirm 2026** Roth phase-out and LTCG 0%/15%/20% thresholds against the IRS 2026 inflation-adjustment Rev. Proc.

- [ ] **Step 2: Roll the Roth phase-out table forward** (`:491-496`) so rows are **2025** and **2026** (drop 2024):

```markdown
| Год | Статус | Полный взнос | Частичный взнос | Запрет |
|-----|--------|--------------|-----------------|--------|
| **2025** | Single | до $150,000 | $150,001-$165,000 | выше $165,000 |
| **2025** | MFJ | до $236,000 | $236,001-$246,000 | выше $246,000 |
| **2026** | Single | до $153,000 | $153,001-$168,000 | выше $168,000 |
| **2026** | MFJ | до $242,000 | $242,001-$252,000 | выше $252,000 |
```

- [ ] **Step 3: Update the phase-out worked example** (`:504-510`) to 2026 Single numbers (lower bound $153,000, range $15,000) so the arithmetic stays consistent, OR add a one-line note that the example uses 2024 figures for illustration. Prefer updating to 2026.

- [ ] **Step 4: Roll the LTCG bracket table** (`:596-603`) to show **2025** and **2026** rows (drop 2024); update the worked examples at `:605-608` if their thresholds shifted. Add a one-line note: `> ℹ️ Скобки TCJA сделаны постоянными законом OBBBA (2025) — резкого роста ставок в 2026 не произошло. См. раздел про OBBBA.`

- [ ] **Step 5: Update the ordinary-income (short-term) bracket table** (`:614-622`) header from "(2024)" to "(2026)" and refresh the bracket boundaries to 2026 values.

- [ ] **Step 6: Verify**

```bash
grep -nE "2024|\$47,025|\$94,050|\$146,000|\$11,600" ru/module-04-brokers-taxes/README.md
```
Expected: no 2024 bracket presented as current; remaining "2024" only in clearly-labelled historical context.

- [ ] **Step 7: Commit**

```bash
git add ru/module-04-brokers-taxes/README.md
git commit -m "docs(ru): roll Roth phase-out and capital-gains brackets to 2025/2026"
```

### Task 3: I-Bonds limit correction (ADVANCED)

**Files:**
- Modify: `ru/ADVANCED.md` (lines 477, 495, 549-553)

- [ ] **Step 1: Confirm** that the paper-I-Bond-via-tax-refund option ended Jan 1, 2025 (TreasuryDirect) and the annual electronic limit is $10,000/person.

- [ ] **Step 2: Fix the I-Bonds limit line** (`:477`):

```
├── Лимит: $10,000/год (только электронные)
```
and add immediately below:
```
├── ⚠️ Бумажные I-Bonds через возврат налога ОТМЕНЕНЫ с 1 января 2025
```

- [ ] **Step 3: Fix the comparison table row** (`:495`) "Лимит покупки | $15,000/год | Без лимита" → "$10,000/год | Без лимита".

- [ ] **Step 4: Fix the strategy block** (`:549-553`). Replace:
```
├── Максимум I-Bonds: $15,000/год на человека
│   ├── $10,000 через TreasuryDirect
│   └── $5,000 через tax refund (бумажные)
```
with:
```
├── Максимум I-Bonds: $10,000/год на человека (только электронные)
│   └── $10,000 через TreasuryDirect (treasurydirect.gov)
```

- [ ] **Step 5: Verify**

```bash
grep -nE "15,000|5,000 через tax refund|бумажные" ru/ADVANCED.md
```
Expected: no I-Bond reference to $15,000 or paper/tax-refund bonds.

- [ ] **Step 6: Commit**

```bash
git add ru/ADVANCED.md
git commit -m "docs(ru): correct I-Bonds limit ($10k, paper-via-refund ended 2025)"
```

### Task 4: QCD limit, mega-backdoor 415(c), SECURE 2.0 catch-up wording (ADVANCED)

**Files:**
- Modify: `ru/ADVANCED.md` (lines 253, 276-278, 791)

- [ ] **Step 1: Confirm** QCD 2025 = $108,000 (indexed for 2026); 415(c) total DC limit 2026 = $72,000; ages-60–63 catch-up = $11,250.

- [ ] **Step 2: Fix the mega-backdoor cap** (`:253`):
```
├── Лимит: $72,000 в 2026 (общий для всех взносов 401k, лимит 415(c))
```

- [ ] **Step 3: Fix the SECURE 2.0 catch-up block** (`:276-278`). Replace:
```
├── 401(k): $7,500 дополнительно (2024)
├── С 2025 для 60-63 лет: $10,000 или 150%
└── Высокооплачиваемые (>$145k): только Roth catch-up
```
with:
```
├── 401(k): $8,000 дополнительно (2026, для 50+)
├── Для 60-63 лет: усиленный catch-up $11,250 (SECURE 2.0)
└── Высокооплачиваемые (>$145k, индексируется): catch-up только в Roth —
    правило вступает в силу для налоговых годов после 2026 (по итоговым правилам IRS 2025)
```

- [ ] **Step 4: Fix the QCD limit** (`:791`): "├── До $100,000/год" → "├── До $108,000/год (2025), $111,000 (2026); сумма индексируется".

- [ ] **Step 5: Verify**

```bash
grep -nE "69,000|\\\$100,000/год|\\\$7,500 дополнительно|\\\$10,000 или 150" ru/ADVANCED.md
```
Expected: none of these stale strings remain.

- [ ] **Step 6: Commit**

```bash
git add ru/ADVANCED.md
git commit -m "docs(ru): fix QCD limit, 415(c) cap, SECURE 2.0 catch-up details"
```

### Task 5: Sweep remaining scattered limit references (RU)

**Files:**
- Modify: `ru/VISUAL-GUIDE.md:640`, `ru/SOURCES.md:228`, plus any hits from the sweep below.

- [ ] **Step 1: Find every stale limit string outside Module 4**

```bash
grep -rnE "23,?500|\\\$7,000|4,?300|8,?550|31,?000" ru/ | grep -v "module-04-brokers-taxes"
```

- [ ] **Step 2: Update `ru/VISUAL-GUIDE.md:640`** "401(k) лимит 2025: $23,500 (+$7,500 если 50+)" → "401(k) лимит 2026: $24,500 (+$8,000 если 50+)".

- [ ] **Step 3: Update `ru/SOURCES.md:228`** "401(k): $23,500 (+ $7,500 если 50+)" → "401(k): $24,500 (+ $8,000 если 50+)" and refresh any IRA/HSA figures in that block to 2026.

- [ ] **Step 4: Update any other hits** from Step 1 (TLDR.md, QUICKSTART.md, CHECKLISTS.md, FAQ.md, etc.) to 2026 values, preserving worked-example arithmetic where a number is illustrative.

- [ ] **Step 5: Verify**

```bash
grep -rnE "лимит 2025|\\\$23,500" ru/ | grep -v "для справки"
```
Expected: no remaining "2025 limit" presented as current.

- [ ] **Step 6: Commit**

```bash
git add ru/VISUAL-GUIDE.md ru/SOURCES.md ru/*.md
git commit -m "docs(ru): sweep remaining 2025 limit references to 2026"
```

---

## Phase 2 — Missing substantive content (RU)

### Task 6: Non-resident US estate-tax section + Irish-ETF reframe (NON-RESIDENTS)

**Files:**
- Modify: `ru/NON-RESIDENTS.md` — add a new section before "Ирландские ETF — детальный раздел" (currently `:482`); edit the Irish-ETF intro (`:473-478`, `:497-520`) to add the estate-tax rationale.

- [ ] **Step 1: Insert the new estate-tax section** immediately before `## Ирландские ETF — детальный раздел`:

```markdown
## ⚠️ Налог на наследство США для нерезидентов (Estate Tax) — критически важно

> Это один из самых недооценённых рисков для нерезидентов, владеющих
> американскими активами. Игнорирование может стоить наследникам до 40% капитала.

### В чём проблема

США облагают налогом на наследство **активы, расположенные в США (US-situs assets)**,
которые остаются после смерти владельца — независимо от того, где он жил.

```
Для гражданина/резидента США:
└── Освобождение ~$15 млн (2026) → почти никто не платит

Для НЕРЕЗИДЕНТА США (NRA):
├── Освобождение всего $60,000
├── Ставка налога: до 40% на сумму свыше $60,000
└── Налог платят НАСЛЕДНИКИ, прежде чем получат активы
```

### Что считается «активом в США» (US-situs)

```
Облагается налогом на наследство США:
├── Акции американских компаний (Apple, Microsoft и т.д.)
├── ETF, зарегистрированные в США (VOO, VTI, VT, BND, QQQ)
└── Даже если куплены через иностранного брокера!

НЕ облагается:
├── Ирландские/люксембургские ETF (UCITS): CSPX, VWRA, EIMI
├── Денежные средства на брокерском счёте (обычно)
└── Облигации Казначейства США (по правилу portfolio interest — обычно)
```

### Пример

```
Нерезидент (например, резидент ОАЭ или Сингапура) держит $500,000 в VOO.
Владелец умирает.

├── US-situs актив: $500,000
├── Освобождение: $60,000
├── Налогооблагаемая база: $440,000
├── Налог на наследство США: ~$130,000-176,000 (прогрессивно, до 40%)
└── Наследники получают актив только после уплаты

Если бы те же деньги были в ирландском CSPX (S&P 500):
└── Налог на наследство США: $0 (не US-situs актив)
```

> 💡 **Вот почему ирландские ETF — не только про дивиденды.** Главная причина,
> по которой опытные нерезиденты выбирают ирландские UCITS-фонды (CSPX, VWRA),
> — это защита от налога на наследство США, а экономия на удержании дивидендов
> идёт бонусом.

### Как снизить риск

```
├── Использовать ирландские/люксембургские ETF (UCITS) вместо US ETF
├── Проверить, есть ли у вашей страны соглашение об избежании двойного
│   налога на НАСЛЕДСТВО с США (estate tax treaty) — их немного
│   (напр. Германия, Франция, Великобритания, Япония — есть; большинство — нет)
├── Не накапливать крупные суммы в отдельных акциях США / US-ETF на личном счёте
└── При значительном капитале — консультация с международным налоговым юристом
```

> ⚠️ Это образовательный материал, а не налоговая консультация. Правила
> сложны и зависят от вашей страны. Перед крупными инвестициями
> проконсультируйтесь со специалистом по международному налогообложению.

---
```

- [ ] **Step 2: Reframe the Irish-ETF rationale.** In the existing "Почему ирландские ETF" block (`:473-478`) and the US-vs-Irish comparison (`:592-613`), add a bullet/line: `├── Защита от налога на наследство США ($60k порог для нерезидентов)` and a cross-reference: `> 📖 См. раздел «Налог на наследство США для нерезидентов» выше.`

- [ ] **Step 3: Verify**

```bash
grep -nE "наследство США|US-situs|\\\$60,000|CSPX" ru/NON-RESIDENTS.md | head
```
Expected: new section present; Irish-ETF blocks reference estate tax.

- [ ] **Step 4: Commit**

```bash
git add ru/NON-RESIDENTS.md
git commit -m "docs(ru): add NRA US estate-tax section, reframe Irish-ETF rationale"
```

### Task 7: OBBBA tax-law primer (Module 4) + estate-exemption figure (ADVANCED)

**Files:**
- Modify: `ru/module-04-brokers-taxes/README.md` — add a new lesson section after "Урок 4.3" intro or as a callout near the brackets (after `:622`).
- Modify: `ru/ADVANCED.md` — add the federal estate/gift exemption number to the Estate Planning section (after `:709`).

- [ ] **Step 1: Confirm OBBBA provisions** (signed July 2025): TCJA individual brackets permanent; standard deduction permanent & raised; SALT cap $40,000 through 2029 (phase-down above $500k MAGI); senior bonus deduction ($6,000/filer 65+, 2025–2028); estate/gift exemption $15M (2026, permanent + indexed); child "Trump" savings accounts.

- [ ] **Step 2: Insert the OBBBA primer** in `ru/module-04-brokers-taxes/README.md` after the capital-gains bracket tables (after line `:622`):

```markdown
### 📜 One Big Beautiful Bill Act (OBBBA, 2025) — что изменилось

> Закон подписан в июле 2025 года и существенно повлиял на личное
> налогообложение в США. Ключевое для инвестора:

```
├── Ставки подоходного налога TCJA сделаны ПОСТОЯННЫМИ
│   └── Ожидавшегося роста ставок в 2026 НЕ произошло
├── Стандартный вычет повышен и закреплён
│   └── 2025: $15,750 (single) / $31,500 (MFJ); далее индексируется
├── Лимит вычета налогов штата (SALT): $40,000 (2025), $40,400 (2026)
│   └── Растёт ~1%/год до 2029, затем возврат к $10,000 (2030); уменьшается при MAGI выше $500,000
├── Новый вычет для пенсионеров 65+: до $6,000 на человека (2025-2028)
├── Освобождение от налога на наследство: $15 млн (2026), постоянно + индексация
└── Новые накопительные счета для детей («Trump accounts»)
```

> ⚠️ Это образовательный обзор, а не налоговый совет. Детали и пороги
> сложны — проверяйте актуальную информацию на IRS.gov и консультируйтесь
> с CPA.
```

- [ ] **Step 3: Add the estate-exemption figure to ADVANCED Estate Planning.** In `ru/ADVANCED.md`, in the "Основы планирования наследства" block (after `:709`), insert:

```markdown
> 💡 **Когда вообще применяется федеральный налог на наследство?**
> Освобождение в 2026 году — **$15 млн на человека** ($30 млн на пару),
> закреплено законом OBBBA (2025) и индексируется. Большинство инвесторов
> ниже этого порога и федеральный estate tax не платят — но проверьте
> налог на наследство вашего штата (в части штатов порог гораздо ниже).
> ⚠️ Для **нерезидентов США** порог всего $60,000 — см. раздел в [NON-RESIDENTS](/investing-course/ru/NON-RESIDENTS/).
```

- [ ] **Step 4: Verify**

```bash
grep -nE "OBBBA|15 млн|\\\$40,000|Trump account" ru/module-04-brokers-taxes/README.md ru/ADVANCED.md
```
Expected: OBBBA primer present in Module 4; estate exemption figure present in ADVANCED.

- [ ] **Step 5: Commit**

```bash
git add ru/module-04-brokers-taxes/README.md ru/ADVANCED.md
git commit -m "docs(ru): add OBBBA primer and federal estate-exemption figure"
```

---

## Phase 3 — Accuracy & freshness fixes (RU)

### Task 8: ETF-ANALYSIS date honesty + price/AUM/company-count fixes

**Files:**
- Modify: `ru/ETF-ANALYSIS.md` (lines 13, 50-54, 60, 154, 165, 191, 306, 454, 586; VTI count at 54, 154, 167, 176)
- Modify: `ru/module-03-instruments/README.md:166, :213` (VTI count)

- [ ] **Step 1: Make return-data dating honest.** The header says "январь 2026" (`:13`) but every return chart says "(на январь 2025)". Either (a) refresh the return figures to a current "по состоянию на начало 2026" snapshot, or (b) change the header to match the data. Preferred: change each "Среднегодовая доходность (на январь 2025)" label to "(данные на начало 2025 — обновляйте перед использованием)" and add to the header note: `Графики доходности приведены по состоянию на начало 2025 года.` Pick one and apply consistently to `:60, :191, :306, :454, :586`.

- [ ] **Step 2: Replace hard prices with a "check live data" pattern.** For VOO (`:50`), VTI (`:163`), QQQ (`:277`), VT (`:429`), BND (`:557`), change "Цена акции | ~$540" rows to "Цена акции | проверьте на [etf.com](https://www.etf.com)" (prices drift too fast to hard-code). Keep expense ratios (stable).

- [ ] **Step 3: Soften AUM figures** by appending "(проверьте актуальное значение)" to each AUM row, or remove the specific number. VOO's "~$840 млрд" is already stale (VOO became the largest ETF globally in 2025).

- [ ] **Step 4: Fix VTI company count.** "~4,000" → "~3,600" in `ru/ETF-ANALYSIS.md:54, :154, :167, :176, :685` and `ru/module-03-instruments/README.md:166, :213, :442`.

- [ ] **Step 5: Verify**

```bash
grep -nE "на январь 2025|~\\\$540|~4,000|4,000" ru/ETF-ANALYSIS.md ru/module-03-instruments/README.md
```
Expected: no remaining header/data date contradiction; VTI count is ~3,600; prices delegated to etf.com.

- [ ] **Step 6: Commit**

```bash
git add ru/ETF-ANALYSIS.md ru/module-03-instruments/README.md
git commit -m "docs(ru): fix ETF data dating, delegate prices to etf.com, correct VTI count"
```

### Task 9: Russia section — SPB Exchange OFAC (Nov 2023) + blocked-asset swap

**Files:**
- Modify: `ru/RUSSIA.md` (lines 33-42, 220-253)

- [ ] **Step 1: Add the SPB Exchange OFAC sanction** to the "заморозка активов" block (`:33-42`). After the "~14% акций США на СПБ Бирже неторгуемы" line, add:
```
├── Ноябрь 2023: СПБ Биржа внесена в SDN-список OFAC
│   └── Заморожена бóльшая часть оставшихся иностранных бумаг (не только 14%)
```

- [ ] **Step 2: Add the blocked-asset swap program** to the "Российские брокеры" / freeze section (`:220-253`):
```
Программа обмена заблокированными активами (2024):
├── Государство организовало выкуп заблокированных иностранных бумаг нерезидентами
├── Лимит для розничного инвестора — до 100,000 руб номинала
├── Участие добровольное, выкуплена лишь часть заявок
└── Не решает проблему для крупных портфелей
```

- [ ] **Step 3: Refresh the "Последнее обновление" stamp** (`:846`) to the current date and note the added SPB/Свопы details.

- [ ] **Step 4: Verify**

```bash
grep -nE "SDN|OFAC|обмен заблокирован|100,000 руб" ru/RUSSIA.md
```
Expected: SPB OFAC and swap-program text present.

- [ ] **Step 5: Commit**

```bash
git add ru/RUSSIA.md
git commit -m "docs(ru): add SPB Exchange OFAC sanction and 2024 blocked-asset swap"
```

### Task 10: Crypto / Fidelity factual fix (Module 4 + Module 3)

**Files:**
- Modify: `ru/module-04-brokers-taxes/README.md:105` (broker comparison table — "Криптовалюты" row)
- Modify: `ru/module-03-instruments/README.md` (add a short spot-ETF note near REITs/instruments, optional)

- [ ] **Step 1: Fix the Fidelity crypto cell** (`:105`). The row "Криптовалюты | Fidelity ❌ | ..." is outdated — Fidelity offers Fidelity Crypto and the FBTC spot ETF. Change Fidelity's cell to "✅ (Fidelity Crypto / FBTC)" and add a footnote:
```
> ℹ️ С 2024 года доступны спотовые Bitcoin/Ethereum ETF (напр. FBTC, IBIT),
> которые можно купить у любого брокера как обычный ETF. Это образовательная
> справка, а не рекомендация — крипто остаётся высокорисковым активом.
```

- [ ] **Step 2: Verify**

```bash
grep -nE "FBTC|спотов|Fidelity Crypto" ru/module-04-brokers-taxes/README.md
```
Expected: Fidelity crypto cell updated; spot-ETF note present.

- [ ] **Step 3: Commit**

```bash
git add ru/module-04-brokers-taxes/README.md ru/module-03-instruments/README.md
git commit -m "docs(ru): correct Fidelity crypto availability, note spot BTC/ETH ETFs"
```

---

## Phase 4 — Improvements (RU)

### Task 11: International diversification subsection

**Files:**
- Modify: `ru/module-05-strategies/README.md` (add a subsection) OR `ru/ETF-ANALYSIS.md` (after the VT section). Choose Module 5 (asset allocation) — confirm exact insertion point by reading the file first.

- [ ] **Step 1: Read `ru/module-05-strategies/README.md`** to find the asset-allocation lesson and a natural insertion point.

- [ ] **Step 2: Insert the subsection:**

```markdown
### 🌍 Зачем международная диверсификация (VXUS / VEA / VWO)

```
США — это ~60% мирового рынка акций, а не 100%.
Последнее десятилетие акции США сильно опережали остальной мир,
но так было НЕ всегда:

├── 2000-2009: международные акции опередили США («потерянное десятилетие» S&P 500)
├── 2010-2024: США уверенно лидировали
└── Никто не знает, чья очередь следующая

Практический вывод:
├── Доля ex-US 20-40% от акций снижает страновой риск
├── Простой путь: VT (весь мир) или VTI + VXUS
└── Не путайте недавнюю доходность с гарантией будущей (recency bias)
```

> 💡 Прошлые результаты не предсказывают будущие — и для отдельных стран это
> особенно верно. Глобальная диверсификация — это страховка, а не ставка.
```

- [ ] **Step 3: Verify**

```bash
grep -nE "международная диверсификация|recency bias|VXUS" ru/module-05-strategies/README.md
```
Expected: subsection present.

- [ ] **Step 4: Commit**

```bash
git add ru/module-05-strategies/README.md
git commit -m "docs(ru): add international diversification subsection (recency bias)"
```

### Task 12: Decumulation nuance — 4% rule update (ADVANCED)

**Files:**
- Modify: `ru/ADVANCED.md:292-311` (4% Rule block)

- [ ] **Step 1: Add modern context** to the "4% Rule и его ограничения" block. After the "Современные альтернативы" list (`:306-311`), add:

```markdown
> 💡 **Свежий контекст:** сам Уильям Бенген (автор правила) в недавних работах
> повысил безопасную ставку примерно до 4.7%, а Morningstar в ежегодных
> обзорах 2024-2025 поднял оценку обратно к ~3.7-4% по мере роста доходностей
> облигаций. Диапазон 3.3-3.5% — консервативный нижний край, а не единственная истина.
```

- [ ] **Step 2: Verify**

```bash
grep -nE "Бенген|4.7|Morningstar" ru/ADVANCED.md
```
Expected: nuance note present.

- [ ] **Step 3: Commit**

```bash
git add ru/ADVANCED.md
git commit -m "docs(ru): add modern safe-withdrawal-rate context to 4% rule"
```

### Task 13 (optional, structural): Single source-of-truth limits reference

**Files:**
- Create: `ru/reference.md` already exists — confirm its purpose first; if suitable, add a canonical "Лимиты и пороги по годам" table there and link to it from Module 4, VISUAL-GUIDE, SOURCES.

- [ ] **Step 1: Read `ru/reference.md`** to decide whether to extend it or create a dedicated limits page.

- [ ] **Step 2: Add a canonical limits table** (2025 | 2026 columns) covering IRA, 401(k), HSA, Roth phase-out, LTCG brackets, estate exemption — the one place to update each November.

- [ ] **Step 3: Replace the inline tables** in Module 4 / VISUAL-GUIDE / SOURCES with a short value + a link to the canonical table (reduces future drift). Keep enough inline context that lessons still read well.

- [ ] **Step 4: Verify** the canonical page builds and links resolve; **Step 5: Commit.**

> Note: This task reduces *future* maintenance cost but touches many files. It is optional for this pass and can be deferred to a follow-up PR if scope needs trimming.

---

## Phase 5 — English mirror (en/)

> Per the project content guidelines: `en/` is the translation and must **NOT** contain Russia-specific content. So Tasks 9 (Russia) is **skipped** for EN. Everything else mirrors.

### Task 14: Mirror data corrections to EN (Tasks 1-5 equivalents)

**Files:**
- Modify: `en/module-04-brokers-taxes/README.md`, `en/ADVANCED.md`, `en/VISUAL-GUIDE.md`, `en/SOURCES.md`, and any other EN file surfaced by the sweep.

- [ ] **Step 1: Diff the RU changes** for Tasks 1-5 (`git log --oneline` for this branch) and apply the same numeric updates to the EN counterparts, translating surrounding prose to English.

- [ ] **Step 2: Sweep EN for stale figures**

```bash
grep -rnE "23,?500|\\\$7,000|4,?300|8,?550|\\\$69,000|15,000.*[Bb]ond|\\\$100,000/year" en/
```

- [ ] **Step 3: Apply** the 2026 values (same Verified-figures reference table).

- [ ] **Step 4: Verify** the sweep returns no current-year-stale figures; **Step 5: Commit**

```bash
git add en/
git commit -m "docs(en): mirror 2026 data corrections from ru/"
```

### Task 15: Mirror new sections to EN (Tasks 6, 7, 8, 10, 11, 12)

**Files:**
- Modify: `en/NON-RESIDENTS.md` (estate-tax section), `en/module-04-brokers-taxes/README.md` (OBBBA primer, Fidelity crypto), `en/ADVANCED.md` (estate exemption, 4% nuance), `en/ETF-ANALYSIS.md` (dating/prices/VTI count), `en/module-05-strategies/README.md` (international diversification).

- [ ] **Step 1: Translate and insert** the NRA estate-tax section into `en/NON-RESIDENTS.md` (this audience — international ex-Russia — needs it most).

- [ ] **Step 2: Translate and insert** the OBBBA primer, estate-exemption note, Fidelity-crypto fix, international-diversification subsection, 4%-rule nuance, and ETF-dating fixes into their EN counterparts.

- [ ] **Step 3: Verify**

```bash
grep -rnE "estate tax|US-situs|\\\$60,000|OBBBA|recency bias" en/ | head
```
Expected: mirrored sections present in EN.

- [ ] **Step 4: Commit**

```bash
git add en/
git commit -m "docs(en): mirror new sections (NRA estate tax, OBBBA, intl diversification)"
```

---

## Phase 6 — Finalize

### Task 16: Date stamps, changelog, build, PR

**Files:**
- Modify: all "Актуально на: январь 2026" / "Последнее обновление" stamps across `ru/` and `en/`; `IMPROVEMENT_PLAN.md`; create `CHANGELOG.md` (recommended by prior audit).

- [ ] **Step 1: Refresh date stamps.** Update "январь 2026" → current month/2026 where the page was actually revised. Do not blanket-change pages you didn't touch.

```bash
grep -rln "январь 2026" ru/ ; grep -rln "January 2026" en/
```

- [ ] **Step 2: Update `IMPROVEMENT_PLAN.md`** "Последнее обновление" block with a summary of this pass (2026 limits, OBBBA, NRA estate tax, I-Bonds, ETF dating).

- [ ] **Step 3: Create `CHANGELOG.md`** (and add to `_config.yml` exclude) listing this refresh, so future audits can track update cadence.

- [ ] **Step 4: Local sanity build (if Ruby/Jekyll available), else rely on CI.**

```bash
bundle exec jekyll build 2>/dev/null && echo "BUILD OK" || echo "No local Jekyll — CI will build on push"
```

- [ ] **Step 5: Final stale-figure sweep across the whole repo**

```bash
grep -rnE "23,?500|\\\$69,000|15,000.*[Bb]ond|\\\$100,000/(год|year)" ru/ en/ | grep -viE "для справки|reference|2025"
```
Expected: empty (no stale value presented as current).

- [ ] **Step 6: Push and open PR**

```bash
git push -u origin fix/2026-data-refresh
gh pr create --title "2026 data refresh + gap-fill (OBBBA, NRA estate tax, limits)" \
  --body "Refreshes all tax figures to IRS 2026 values; adds OBBBA primer and non-resident US estate-tax section; corrects I-Bonds/QCD/mega-backdoor; fixes ETF data dating; updates Russia sanctions. RU authored, EN mirrored (Russia content excluded from EN per the project content guidelines). All dollar figures confirmed against IRS.gov/Treasury during execution."
```

---

## Self-review (spec coverage)

Every finding from the review maps to a task:

| Review finding | Task(s) |
|---|---|
| Whole course on 2025 limits | 1, 5, 14 |
| Roth phase-out / LTCG / ordinary brackets stale | 2, 14 |
| I-Bonds paper/tax-refund obsolete | 3, 14 |
| Mega-backdoor "$69,000 (2024)" | 4, 14 |
| QCD "$100,000" stale | 4, 14 |
| SECURE 2.0 catch-up wording | 4, 14 |
| OBBBA entirely absent | 7, 15 |
| NRA US estate tax missing (biggest risk) | 6, 15 |
| Estate exemption never stated | 7, 15 |
| ETF-ANALYSIS date contradiction / stale prices / VTI count | 8, 15 |
| Russia: SPB OFAC understated; swap program missing | 9 (RU only) |
| Fidelity crypto / spot ETFs outdated | 10, 15 |
| International diversification underbuilt | 11, 15 |
| 4%-rule decumulation nuance | 12, 15 |
| Future-drift prevention (structural) | 13 (optional) |
| Date stamps / changelog / build / PR | 16 |

**Scope note:** Phases 1-3 (data + the two critical gaps) are the high-value, low-risk core and could ship as their own PR if you want to land corrections fast; Phases 4 and 13 are enhancements that can follow. EN mirror (Phase 5) should ship in the same PR as its RU source to avoid the versions diverging.
