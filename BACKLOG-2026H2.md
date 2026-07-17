# Backlog — 2026 H2 expert review

> Fresh multi-lens review after the original 65-item backlog was fully cleared.
> Lenses: **EdTech product owner** (UX/accessibility/SEO/growth), **investor/FRM**, **CPA/tax advisor**.
> Every item here is **new** — nothing duplicates the completed `BACKLOG.md`.
> Verified against the current site (2026-07-17). IDs are grouped by epic.

## How to read

- **Priority:** P1 = do first (correctness/compliance/high-leverage) · P2 = strong value · P3 = polish.
- **Type:** 🐞 correctness/compliance bug · ✨ enhancement.
- **Eff:** S / M / L.
- Content items must be mirrored **RU + EN** (RU is the source of truth); RU-only where noted.

---

## Epic A — SEO & discoverability (PO)

| ID | Pri | Eff | Type | Item |
|----|-----|-----|------|------|
| SEO-1 | P1 | M | ✨ | **Structured data (schema.org JSON-LD).** `jekyll-seo-tag` emits only basic OG/meta — no rich-result markup anywhere. Add a per-page-type include: `Course` on `index.md` (name, provider, description, `isAccessibleForFree`, `inLanguage`), `FAQPage` on `FAQ.md` (25 Q&As already structured), `BreadcrumbList` on module/reference pages. Highest-leverage organic-search win for a free, search-dependent course. RU+EN, localized. |
| SEO-2 | P2 | S | ✨ | **Default OG/social share image.** No `image:` key in either `_config.yml`, so every shared module/reference link renders as a blank card on LinkedIn/Telegram/Slack. Add one branded asset per language + one config line → `jekyll-seo-tag` emits `og:image`/`twitter:image`. (BL-107 added OG only to the standalone landing `index.html`, not the two Jekyll sites.) |

## Epic B — Accessibility & performance (PO)

| ID | Pri | Eff | Type | Item |
|----|-----|-----|------|------|
| A11Y-1 | P1 | S | 🐞 | **WCAG AA contrast fails on primary controls.** White text on `#4caf50` (~2.78:1) and green `#4caf50` link text on white both fail AA — and it's the core engagement loop: mark-complete button, quiz "Check answers", wizard CTA, certificate Print, newsletter Subscribe, "View certificate"/feedback links. The darker `#2e7d32` already used elsewhere passes (~5.1:1). Swap fills + green link text to `#2e7d32`. |
| A11Y-2 | P2 | S–M | 🐞 | **Focus is lost after every widget state change.** Quiz hides the Check button (focus drops to `<body>`), wizard/feedback replace `innerHTML` on each transition — keyboard/AT users are dumped to page top at the interaction moment (WCAG 2.4.3). Move focus to the results heading / new question / thank-you node after each render. |
| A11Y-3 | P2 | S | ✨ | **Wizard lacks group semantics.** The question is a styled `<div>`, answers are bare `<button>`s. Add `role="group"`/`aria-labelledby` (or render the prompt as a heading) so the choices are announced as a labeled set. |
| A11Y-4 | P3 | S | ✨ | **Respect `prefers-reduced-motion`.** Progress-bar `transition:width .3s` isn't guarded (WCAG 2.3.3). Wrap in `@media (prefers-reduced-motion: no-preference)`. |
| PERF-1 | P2 | M | ✨ | **Extract inline widget JS to a cacheable asset.** ~10 KB across 4 IIFEs is inlined into `<head>` on every page/lang, re-parsed each navigation, never cached, and duplicated RU/EN. Move to `/assets/js/course.js` (`defer`), keep language detection. Cuts per-page HTML weight and de-duplicates maintenance. |

## Epic C — Engagement & retention (PO)

| ID | Pri | Eff | Type | Item |
|----|-----|-----|------|------|
| ENG-1 | P1 | M | ✨ | **Per-module scored knowledge checks.** Only one course-wide quiz exists; modules end with static `<details>` self-answers. The quiz engine already keys best-score by `location.pathname`, so it natively supports N quizzes — drop a `#ic-quiz-root` + JSON block into each module. Retrieval practice per unit is the top retention lever; reuses tested JS (content-only). |
| ENG-2 | P2 | M | ✨ | **"Resume where you left off."** The progress widget only appears on module pages + `/modules/`; home/reference/practice show nothing. Add a "Continue → Module N" block on the homepage that deep-links the first incomplete module (tracker already knows completion). Frictionless re-entry for a multi-hour course. |
| ENG-3 | P2 | S | ✨ | **Certificate shareability.** Certificate is print-only. Add a LinkedIn "Add to profile" link (prefilled course/year) and/or a share button. Free, high-trust word-of-mouth + completion incentive. Keep "symbolic" framing — no accreditation claims. |
| ENG-4 | P2 | M | ✨ | **Glossary first-use cross-linking.** 100+ glossary terms, but module prose redefines terms inline with no link/tooltip to the canonical entry. Link (or `<abbr title>`) the top ~20 terms on first use per page. Lowers beginner cognitive load + strengthens internal linking. |
| ENG-5 | P3 | M | ✨ | **Pre-course experience diagnostic.** Extend the wizard pattern: 3–4 questions → recommend Express / Standard / Advanced path and deep-link it, replacing the static path menu in `index.md`. |
| ENG-6 | P3 | M | ✨ | **Spaced reinforcement / streak nudge.** Tracker records completion but nothing rewards consistency or prompts review. A simple day-streak or "review these modules" spacing prompt in the progress widget. |
| ENG-7 | P3 | S | ✨ | **Surface CHANGELOG + site-wide freshness.** `CHANGELOG.md` isn't linked from the footer; per-page `last_reviewed` exists but there's no global "actively maintained" signal — a trust asset for finance content. |
| ENG-8 | P3 | M | ✨ | **Newsletter onboarding drip** (external-service dependent). Once a provider is wired (BL-604), add a welcome → path-selection → module-nudge sequence rather than a single annual-update list. |

## Epic D — Tax content (CPA)

| ID | Pri | Eff | Type | Item |
|----|-----|-----|------|------|
| TAX-1 | P1 | M | 🐞 | **Estimated taxes / quarterly payments / safe harbor — missing entirely.** The course stresses brokers don't withhold on dividends/gains but never warns about **quarterly estimates** or the **underpayment penalty**. Add the safe harbors (lesser of 90% current-year or 100% prior-year tax — **110% if prior-year AGI > $150k**), Form **1040-ES** / **2210**, the annualized-installment method for lumpy year-end gains, and the "W-2 withholding counts as paid evenly" trick. The most common way a passive investor with a big gain / Roth conversion gets an actual penalty. Home: `module-04-taxes`. |
| TAX-2 | P2 | M | ✨ | **Tax-gain harvesting in the 0% LTCG bracket.** Mirror-image of the well-developed TLH section: within the 0% bracket (2026: ≤$49,450 single / $98,900 MFJ taxable income) sell + immediately rebuy to reset basis tax-free. Include: (a) **wash-sale does NOT apply to gains**; (b) LTCG **stack on ordinary income** (only the slice under the ceiling is 0%); (c) the gain **raises MAGI** → ACA/SS/IRMAA effects; (d) state tax may still apply. Core FIRE/low-income-year lever; pairs with the existing Roth-ladder content. Home: `ADVANCED.md`. |
| TAX-3 | P2 | S–M | ✨ | **ETF vs mutual-fund capital-gains distributions (1099-DIV Box 2a).** Box 2a is listed but never explained; ETF "tax efficiency" is a bare bullet. Explain in-kind creation/redemption → ETFs avoid pass-through cap-gains distributions a mutual fund can hand you **in a year you didn't sell (even at a loss)**, plus the **"buying a distribution"** year-end trap. Underpins the course's asset-location advice. Homes: `module-04-taxes`, `module-06-etf-index`. |
| TAX-4 | P3 | S | ✨ | **State tax breadth + Treasury/muni nuance + SS thresholds.** State coverage is capital-gains-only; add that states also tax dividends/interest, **US Treasury interest (T-bills, VGSH/SGOV, I-Bonds) is state-tax-exempt** (currently only I-Bonds noted), and **muni interest is usually taxable in your own state unless in-state**. Add the SS combined-income thresholds ($25k/$34k single, $32k/$44k MFJ) to the up-to-85% note. |
| TAX-5 | P3 | S | 🐞 | **Cost-basis precision + cross-link.** In `module-08-practice` lot-selection: state you must **identify lots at/before settlement** (else the broker default — usually FIFO — locks in), add **covered vs. noncovered** shares (basis only IRS-reported on post-2011/2012 covered lots), and fix "average cost = mutual funds only" (also DRIP stock; hard to revoke once elected). Cross-link from `module-04-taxes` since specific-ID is what makes TLH/tax-gain-harvesting executable. |
| TAX-6 | P3 | S | ✨ | **AMT one-line caveat.** Mostly irrelevant to index investors post-OBBBA, but note the two hooks: **private-activity-bond interest in muni funds is an AMT preference item** (relevant to the muni recommendation in Asset Location) and ISO exercises. A "why it probably doesn't affect you, and the two cases where it might" note in `ADVANCED.md`. |
| TAX-7 | P3 | S | 🐞 | **Non-resident dividend table cleanup.** `module-04-taxes` has two functionally identical "15%" rows ("most countries" / "Canada, UK, etc."); treaty rates actually span 0/10/15%+ by country. Tighten so it doesn't imply a flat 15%. (RU RUSSIA.md caveat already handles the RU suspension.) |

## Epic E — Investment content (FRM)

| ID | Pri | Eff | Type | Item |
|----|-----|-----|------|------|
| INV-1 | P1 | S–M | ✨ | **Confront the concentration of the cap-weighted core.** The course teaches a hard "≤5% per stock, ≤20% per sector" rule, yet its recommended safe core (VOO/VTI) now runs NVDA ~7.9%, top-10 ~39%, IT ~38% — violating both. Only QQQ gets a concentration caveat. Add a "concentration of the cap-weighted index" callout in `ETF-ANALYSIS` VOO section + a sentence in Module 7 §7.2/7.5 noting the index itself can exceed the rule. Most timely conceptual gap; not an argument against indexing. |
| INV-2 | P2 | S | 🐞 | **Fix the Module 6 "Aggressive Growth" model portfolio.** `VTI 60% / VWO 25% / VEA 15%` makes emerging markets ~62% of the international sleeve (~2–3× market weight) — an uncompensated regional bet that contradicts the course's own market-neutral/home-bias teaching, sitting in the same box that only polices *sector* tilts. Rebalance toward market weight (e.g., VXUS or VEA-heavy). Also reconcile `ETF-ANALYSIS` "aggressive → QQQ 20%" with Module 6's own "tilts ≤10%, not part of the base" rule. |
| INV-3 | P2 | S | ✨ | **Caveat the 4% rule on the main path.** Module 8 §8.6 and capstone quiz Q29 present 4% flatly as "safe"; the heavily-caveated treatment (sequence risk, 3.3–3.7% alternatives, non-US failure) lives only in the gated `ADVANCED` page most learners won't open. Add a one-line caveat + cross-link at §8.6 and reword Q29 to "historically survived ~30 years in backtests, not a guarantee." Highest-stakes number in the course. |
| INV-4 | P2 | S | ✨ | **Define the rebalancing band.** "5%" is never specified as 5 percentage points (absolute) vs 5% relative — a large difference on a 20% bond sleeve. State "5 процентных пунктов" and mention the canonical Bogleheads **5/25** two-part rule. |
| INV-5 | P3 | S | 🐞 | **Reconcile the age-allocation glide path across pages.** Module 7 implies ~115–120-minus-age (25→90/10); Module 6, VISUAL-GUIDE §4, and ETF-ANALYSIS use "110-minus-age" (25→85/15). Same age, different stock %. Pick one convention site-wide. |
| INV-6 | P3 | S | ✨ | **Offer a target-date index fund as the true one-fund option.** Module 3 explains the mechanics, but no model-portfolio/"simplest choice" section presents a single target-date index fund (Bogleheads-endorsed, ideal in a 401(k)) — the course's "simplest" is VT, skipping the genuinely simplest auto-glide option. Note tax-inefficiency in taxable accounts. |
| INV-7 | P3 | S | ✨ | **Narrow the active-vs-passive fee framing.** VISUAL-GUIDE §7 shows active 7% vs passive 9% ($608k vs $912k) with the 2-pp gap read as fees, when fee drag is ~1%. Add a line that the 2 pp bundles fees + underperformance + behavior + tax, or narrow the gap. |
| INV-8 | P3 | S | ✨ | **All-Weather rate-risk caveat.** Module 6 lists Dalio All-Weather with `TLT 40% + IEF 15%`; the course elsewhere stresses TLT (~17y duration) fell ~30% in 2022. Link that rate-risk lesson to the 40%-long-bond model. |
| INV-9 | P3 | S | ✨ | **Dividend model-portfolio caveat.** The dividend model portfolios (Module 6 / §8.4) carry no reminder that a dividend tilt isn't superior to total return and is tax-inefficient in a taxable account (where a yield-chaser is most likely to hold it). |
| INV-10 | P3 | S | ✨ | **Explain the BNDX rationale.** The 4-fund portfolios add BNDX 10–15% with no "why" (currency-hedged diversification of the bond sleeve) — readers can't judge inclusion. |

---

## Suggested sequencing

1. **Quick-win correctness sprint (all S):** A11Y-1 (contrast), INV-2 (EM overweight bug), INV-3 (4% caveat), INV-4/INV-5 (rebalancing/glide-path consistency), TAX-7 (dividend table). Low effort, real accuracy/accessibility gains.
2. **Two P1 content gaps:** TAX-1 (estimated taxes — compliance) and INV-1 (index concentration) — the two most valuable teaching additions.
3. **SEO + engagement leverage:** SEO-1 (structured data), ENG-1 (per-module quizzes), SEO-2 (OG image), A11Y-2 (focus), ENG-2 (resume).
4. **Depth & polish:** remaining TAX/INV enhancements, then ENG/PERF polish.

## Notes
- Reviews confirmed the existing content is **strong**: sequence-of-returns math, compounding chains, VISUAL-GUIDE early-start, 60/40 drawdown, duration math, and the 2026 tax figures in `VERIFIED-FACTS.md` all verified correct with no stale numbers. NIIT/wash-sale/FTC/backdoor/Roth-ladder/estate-basics tax coverage is already solid. hreflang/canonical and per-module learning objectives are already in place.
- External-dependency items (analytics, newsletter provider) already ship as config-gated scaffolding; ENG-8 is the only new one gated on the owner wiring a provider.
