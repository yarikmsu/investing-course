# Product & Content Backlog — July 2026

> Three-lens review of the bilingual US investing course: **① experienced investor (FRM)**, **② CPA (US individual + cross-border tax)**, **③ product owner (edtech / investment courses)**. Review date: 2026-07-12.
>
> Builds on the merged May-2026 four-lens audit (`FOUR-LENS-REVIEW-2026.md`). Lenses ① and ② re-verified the current files first: **the May fix wave landed well** — sequence-of-returns, 2008 drawdowns, PFIC, estate tax, Form 8606, W-8BEN validity, HSA catch-up and the 2026 limits all check out. Items below are residual, newly found, introduced-by-fix, or newly stale as of mid-2026. Lens ③ is a first-ever product/pedagogy/UX review.

## How to read this backlog

- **Priority:** P0 = ship-blocker (misleads readers or breaks the live site today) · P1 = high (fix this sprint) · P2 = medium (next sprint) · P3 = polish/opportunity
- **Effort:** S ≤ 1h · M = half-day to a day · L = multi-day
- **Source:** finding ID(s) from the underlying reviews. Items found independently by two lenses are marked (×2) — treat their diagnosis as high-confidence.
- Unless noted otherwise, content fixes apply to **both RU and EN** (RU is primary, then mirror to EN per the project content guidelines).

**Totals: 65 items — 8 × P0 · 20 × P1 · 24 × P2 · 13 × P3.**

> **Status (2026-07-12): Sprint 1 complete.** ✅ Done: all 8 P0 items (BL-101…104, BL-201…204), plus BL-105 (root orphans removed), BL-401 (CI quality gate — `scripts/check-parity.py` + `quality.yml`; the gate immediately caught 20 more dead relative links, also fixed) and BL-215 (suspension dates, fixed alongside BL-204 in the same block).
>
> **Status (2026-07-16e): BL-601 done (config-gated).** ✅ Privacy-friendly analytics wired in: a **GoatCounter** snippet in the shared `head_custom.html` (RU/EN), gated on a new `goatcounter_code` key in each `_config.yml`. No cookies, no PII, and **inert by default** — it loads only when the owner sets their GoatCounter code, so nothing tracks until then. Verified: off by default (0 requests), renders correctly when the code is set, parity 0 errors, builds clean. To activate: create a free GoatCounter site and put its code in `goatcounter_code`. Only remaining item: **BL-604** (newsletter capture — needs a form endpoint).
>
> **Status (2026-07-16d): Russia items done — self-contained backlog COMPLETE.** ✅ **BL-216** (RUSSIA.md ОДДС fines): the "300–500 руб за каждый день" line was wrong — КоАП ст. 15.25 fines for граждане are one-time amounts tiered by delay length; corrected to ≤10 days 300–500 ₽ / 10–30 days 1,000–1,500 ₽ / >30 days 2,500–3,000 ₽ / non-filing 2,000–3,000 ₽ / repeat 20,000 ₽. ✅ **BL-217** (RUSSIA.md crypto): "налогообложение непрозрачно" was stale — ФЗ № 418-ФЗ (from 2025) makes digital currency taxable property; replaced with a defined note (НДФЛ 13% ≤2.4M ₽/yr, 15% above, on the sale gain; 3-НДФЛ by Apr 30, pay by Jul 15). Both web-verified; RU-only (no parity impact). **All self-contained backlog items are now complete.** The only remaining items are **BL-601** (privacy analytics) and **BL-604** (newsletter capture), which require the owner to provision an external account/service — the UI scaffolding can be built once those are available.
>
> **Status (2026-07-16c): BL-222 + BL-223 done.** ✅ **BL-222** — filled the gaps in `VERIFIED-FACTS.md` (the single-source-of-truth file): added the 2026 **MFJ LTCG 15%→20% breakpoint ($613,700)** and the 2025 single/MFJ values ($533,400 / $600,050), the **Traditional-IRA deduction phase-outs** (single $81k–$91k, MFJ-covered $129k–$149k, spouse-only-covered $242k–$252k for 2026, with 2025 values), and the **SECURE 2.0 mandatory-Roth catch-up wage threshold (>$150,000 prior-year FICA wages)** — all web-verified against Notice 2025-67 / IRB 2025-45. ✅ **BL-223** — added one-line callouts in ADVANCED (RU/EN): OBBBA's 2026 charitable changes (0.5%-of-AGI itemizer floor; permanent $1,000/$2,000 non-itemizer deduction) in the DAF section, and up-to-85% Social Security taxability in the SS section. Verified: both build clean, parity 0 errors, guards pass. Remaining: Russia-only BL-216/217; external-account BL-601/604.
>
> **Status (2026-07-16b): Staleness batch done (web-verified).** ✅ Six data-freshness fixes (RU/EN), each verified against a current source: **BL-316** (top-holdings tables in ETF-ANALYSIS ×2, module-02, module-06 grid — NVIDIA is now #1 ~7.9%, AAPL #2 ~7.0%, MSFT #3 ~5.1%; S&P top-10 ~39%; added as-of-mid-2026 notes); **BL-317** (Select Sector SPDR expense ratio 0.10% → 0.08% across all 11 sector rows, per ssga.com); **BL-314** (dead calculator links: i-orp.com → ficalc.app; NewRetirement → boldin.com); **BL-313** (ADVANCED I-Bond example refreshed to the May-2026 composite 4.26% with correct 0.90%+3.34% split, and the historical line corrected — Nov-2024 was 3.11%, per TreasuryDirect); **BL-308** (Module 7 COVID case: the peak-anchored $10k→Jan-2025 figure understated the recovery; corrected $15,500/+55% → $17,500/+75%, internally consistent with the +39%@2022 row); **BL-315** (SOURCES: 2022 crisis "Ongoing" → "~2 years, new highs by early 2024"; Mind the Gap aligned to Module 7's 2025 edition ~1.2 pp; SPIVA year label softened to "latest report"). Verified: both build clean, parity 0 errors, guards pass. Remaining: BL-222/223, Russia-only BL-216/217, external-account BL-601/604.
>
> **Status (2026-07-16): Recompute/consistency batch done.** ✅ Four self-contained internal-accuracy fixes (RU/EN, figures recomputed): **BL-309** (FAQ #21 growth table — 30y/40y were understated by a mixed compounding convention; recomputed with monthly compounding to $1,130,000 and $3,160,000, matching module 5's $1.13M); **BL-310** (ETF-ANALYSIS — the "~0.5%/yr, VTI higher" VTI-vs-VOO claim was wrong on direction and magnitude; reworded to "small and period-dependent — near-identical over the long run, but VOO led by ~0.5 pp/yr over the past decade as mega-caps outperformed"); **BL-311** (Module 7 age-allocation table — the 60/40 "−35%" conflicted with the module's concrete 2008 example of −30%; re-spaced the drawdown column to −50/−44/−37/−30/−25/−20 so 60/40 = −30% matches, staying monotonic and realistic); **BL-312** (VISUAL-GUIDE — Investor A's $314k didn't reproduce under Investor B's monthly convention; recomputed to $400,000, which strengthens the early-start point). Verified: both build clean, parity 0 errors, guards pass. Remaining: web-verification staleness (BL-308/313/314/315/316/317), BL-222/223, Russia-only BL-216/217, and external-account items BL-601/604.
>
> **Status (2026-07-15g): Tax-accuracy + pedagogy batch done.** ✅ Six self-contained corrections (RU/EN, no live-data dependency): **BL-218** (GLOSSARY RMD — dropped the confusing "reaching 74 after 2032" clause, keep "born 1960+ → 75"); **BL-219** (Module 4 RMD-age table — split the wrong "1950 or earlier → 70½" row into pre-7/1/1949 → 70½ and 7/1/1949–1950 → 72 under SECURE 1.0); **BL-220** (added the two SECURE 2.0 penalty exceptions effective 2024 — $1,000/yr emergency personal expense and domestic-abuse-victim distribution); **BL-221** (FAQ #13 — split dividends into qualified 0–20% vs non-qualified REIT/bond-fund ordinary income up to 37%); **BL-318** (Module 5 practice task — reframed the JNJ/KO/PG "which is most attractive?" single-stock pick, which violated the course's own passive rules, into a SCHD-vs-VYM ETF comparison); **BL-319** (Module 0 HYSA "4–5%" → "~3.5–4.3%, check current rates"). Verified: both sites build clean, parity 0 errors, guards pass, all edits confirmed in built HTML. Remaining self-contained P2/P3: the live-market-data staleness items (BL-308/310/313/316/317 need verification against fund pages/TreasuryDirect), BL-314 (dead calculator links), BL-222 (VERIFIED-FACTS additions), BL-309/311/312 (recompute examples), BL-223 (OBBBA callouts); Russia-only BL-216/217 deferred; BL-601/604 need an external account/service.
>
> **Status (2026-07-15f): BL-502 done.** ✅ Split the 1,327-line Module 4 (the main drop-off page) into two focused pages, **without** renumbering the course (kept at 9 modules — no tracker/certificate ripple): **Module 4 "Brokers & Accounts"** (~752 lines: choosing a broker, account types, opening an account) + a new companion **"Module 4 · Taxes for Investors"** (`/module-04-taxes/`, ~660 lines: US investment taxation, non-residents/W-8BEN, forms). The taxes page slots into the modules nav via `nav_order: 5.5` (verified: renders between Module 4 and Module 5). Recalibrated time estimates 45 min → 25 + 25. Curated the shared tail (practical task, key takeaways, self-test, further reading) into broker-vs-tax halves; fixed stale intra-lesson cross-references (tax-forms "where covered" column, renumbered opening lesson 4.6→4.3); updated modules.md tables and index.md cards (RU/EN). Verified: both sites build clean, parity 0 errors (all inbound links to /module-04-brokers-taxes/ still resolve; no broken anchors), guards pass, self-test `<details>` render un-escaped, RU/EN heading counts match (mod4 9/9, taxes 8/8). Remaining open P2: BL-601 (analytics account). Remaining P3: BL-604 (newsletter — external service), staleness refreshes (BL-216–223, BL-308–319, need live data).
>
> **Status (2026-07-15e): BL-603 done.** ✅ Interactive **scored** quiz component (BL-603): a reusable JSON-driven renderer in the shared `head_custom.html` (guarded on `#ic-quiz-root`) + a new self-check page `QUIZ.md` (RU/EN, 8 MCQs on course fundamentals, linked from the Practice hub). Client-side scoring, per-question ✓/✗ + explanations, pass-tier message, best score persisted in localStorage, retry. Built as an additive component (a new page) rather than mass-rewriting every module's `<details>` — lower regression risk; per-module conversion remains a follow-up. Verified in a real browser (Playwright): 8 questions render, "answer all" validation, perfect (8/8) and low-score paths, all 32 inputs lock after grading, best persists across reload, retry re-enables, EN renders. Embedded JSON survives kramdown and does **not** leak into site search. Parity 0 errors, both build clean, guards pass. Remaining open P2: BL-601. Remaining P3: BL-502, BL-604, staleness refreshes.
>
> **Status (2026-07-15d): BL-605 done.** ✅ Interactive audience segmentation wizard on `audiences.md` (RU/EN), rendered client-side into `#ic-wizard-root` via the shared `head_custom.html` (same guarded pattern as the certificate). Routes readers: "Live in the US?" → main course; else RU asks "Russian resident?" → Россияне / Нерезиденты, while EN goes straight to Non-residents (no Russia branch, per policy). Each outcome shows a result card with primary CTA(s) + "start over". The ASCII decision tree is retained as a collapsed `<details>` no-JS fallback. Verified in a real browser (Playwright): full RU 3-outcome tree + restart, EN 2-outcome with no Russia mention, correct hrefs. Parity 0 errors, both build clean, guards pass. Remaining open P2: BL-601. Remaining P3: BL-502, BL-603, BL-604, staleness refreshes.
>
> **Status (2026-07-15c): BL-607 done.** ✅ Per-page "Была ли эта страница полезной? / Was this page helpful?" widget added to the shared `head_custom.html` (RU/EN). Client-side only (localStorage, no backend); a thumbs-down reveals a one-click **pre-filled** GitHub issue (page URL + rating in the body) — far lower friction than writing an issue from scratch. Added `.github/ISSUE_TEMPLATE/page-feedback.md`. Verified in a real browser (Playwright): renders 2 buttons, persists per page, RU/EN detection correct, certificate page skipped, `_blank`/`noopener` link. Fully account-free collection would need an external form (Tally/Formspree) — noted as a follow-up. Remaining open P2: BL-601. Remaining P3: BL-502, BL-603, BL-604, BL-605, staleness refreshes.
>
> **Status (2026-07-15b): BL-404 + BL-406 done.** ✅ **BL-404** — freshness dates: added a front-matter-driven `last_reviewed` badge (`_includes/reviewed.html`, RU/EN) rendered under the H1; stamped the 11 fastest-decaying general pages per language (TOOLS, QUICKSTART, ETF-ANALYSIS, ADVANCED, TLDR, GLOSSARY, index, CHECKLISTS, NON-RESIDENTS, module-03, module-04), replacing the inconsistent inline "Актуально на / Current as of" date lines (RUSSIA.md deferred per priority). ✅ **BL-406** — difficulty labels already reconciled in earlier sprints (M7 🔴 / M8 🟡 everywhere); resolved the remaining half by nesting ADVANCED under the "For Different Audiences" hub so its nav parent matches the audiences section table. Verified: parity 0 errors, both sites build clean, badge + breadcrumb render correctly, build-HTML guard passes. Remaining open P2: BL-601 (needs analytics account). Remaining P3: BL-502, BL-603, BL-604, BL-605, BL-607, plus staleness refreshes.
>
> **Status (2026-07-15): Engagement/content-ops batch.** ✅ Delivered since Sprint 2: BL-402 (EN TLDR re-derived), BL-403 (per-page disclaimers), BL-405 (ABOUT merge + published CHANGELOG), BL-106/107, BL-503 (glossary footer links), BL-602 (progress tracker), BL-606 (completion certificate), BL-601 groundwork, and the localStorage-tracker security/robustness hardening. Just merged: **BL-501** (practice exercises for M2/M4/M5/M8, PR #5). Remaining open P2: BL-404, BL-406, BL-601. Remaining P3: BL-502, BL-603, BL-604, BL-605, BL-607, plus P2/P3 staleness refreshes (BL-216–223, BL-308–319).
>
> **Status (2026-07-14): Sprint 2 complete.** ✅ Cleared the open content-quality P1 items the ultra-review left as "known": BL-205 (ОФЗ coupons), BL-206 (529 K-12 $20K), BL-207/208 (module-4 bracket examples), BL-210 (W-8BEN wording), BL-211 (pro-rata SEP/SIMPLE + Dec-31), BL-212 (IBKR Lite is US-only), BL-213 (Germany/UK notes), BL-214 (ЛДВ + 2025 foreign-securities exclusion), BL-301 (IRA-withdrawal example caveat). Verified: parity 0 errors, both sites build clean. Remaining open: product/ops/engagement epics (BL-106/107, BL-402–406, BL-501–503, BL-601–607) and P2/P3 staleness refreshes (BL-216–223, BL-308–319) — these are larger projects or need live data.
>
> **Status (2026-07-13): Ultra-review complete.** ✅ A third, exhaustive pass (six expert clusters, real Jekyll build as ground truth, all figures recomputed) found and fixed **74 more findings** — see `ULTRA-REVIEW-2026.md`. Headline: three P0 rendering regressions the markdown-only audits couldn't see (quizzes broken + answers leaked, dead site search, a third of EN nav missing), plus operational cross-border errors, ~7× fee-math understatements, non-reproducing investor-story numbers, and the BL-203 CIS fix finally mirrored to EN. Delivered as 7 verified commits; final full rebuild is green (0 parity errors, 0 broken anchors, quizzes/search/nav all working). CI hardened with a build-time rendering guard. This absorbs and extends the Epic 2/3 P1 backlog items.

---

## P0 — Ship-blockers (do first, in this order)

### BL-101 · Stop deploying WIP branches to production — `S` · PO-01
`.github/workflows/deploy.yml:5` deploys on push to `main` **and `claude/*`** into the single production `github-pages` environment. Any agent/WIP push ships unreviewed financial-education content live and overwrites main's deploy.
**Done when:** deploy job runs only on `main`; other branches get build-only validation.

### BL-102 · Fix broken rendering of every quiz answer — `S` · PO-02
`ru/_config.yml` / `en/_config.yml` kramdown config lacks `parse_block_html: true`, so markdown inside `<details>` blocks (all module self-check answers, ~6–30 per module, plus EXERCISES worked examples) renders as raw `**asterisks**` and pipe-text on the live site. The course's main knowledge-check mechanic looks broken everywhere.
**Done when:** `parse_block_html: true` added to both configs (or `markdown="1"` on each `<details>`), one module visually verified.

### BL-103 · Fix the RU module hub page — `S` · PO-03
`ru/modules.md` — the parent nav page of all modules — misnames 4 of 9 modules (swaps 2/3, wrong 6 and 8), assigns wrong difficulty levels, and links `/module-03/` which 404s (real permalink `/module-03-instruments/`). The EN mirror is correct — RU→EN sync failed in reverse.
**Done when:** RU table matches actual module titles/permalinks/levels; link resolves.

### BL-104 · Fix ~29 dead footer links — `S` · PO-04
Bare `README.md` / relative `.md` links in the footer nav of ~14 rendered pages (TOOLS, EXERCISES, CHECKLISTS, TEMPLATES, ETF-ANALYSIS, VISUAL-GUIDE, INVESTOR-STORIES, SOURCES × RU/EN) 404 on the published site — pages publish at pretty permalinks and no relative-links plugin is installed. Both home pages also link `./LICENSE`, which isn't in either build dir.
**Done when:** all links use the `/investing-course/{ru,en}/PAGE/` format mandated by the project content guidelines; LICENSE linked to the GitHub blob or copied into each subsite.

### BL-201 · 1099-DIV foreign tax is Box 7, not Box 6 — `S` · CPA-02 + INV-01 (×2, introduced by May fixes)
`ru/module-04:1049,1052,1145`, `en/module-04:1036,1039,1132`, `ru/ADVANCED.md:213`, `en/ADVANCED.md:214` cite "1099-DIV Box 6: Foreign Tax Paid." On the current form Box 6 = investment expenses; foreign tax is **Box 7** (country: Box 8). Module 8 already says Box 7 — the course contradicts itself, and a reader would look up the wrong box at filing time.
**Done when:** all module-04/ADVANCED references say Box 7; module 8 unchanged.

### BL-202 · Remove misplaced "penalty reduced 50%→25%" box — `S` · CPA-01 + INV-13 (×2)
`ru/module-04:436-438` / `en:431-433`: the SECURE 2.0 **RMD excise** reduction box sits directly under the "Exceptions to the 10% early-withdrawal penalty" heading, telling readers the early-withdrawal penalty was cut from 50%. Correct text already exists in the RMD section (~495).
**Done when:** box deleted from (or moved out of) the early-withdrawal section.

### BL-203 · CIS treaty dividend rates are 30%, not 15% — `S` · CPA-03 (RU only)
`ru/NON-RESIDENTS.md:319-329`: Armenia, Belarus, Georgia, Kyrgyzstan, Moldova, Uzbekistan shown at 15% with W-8BEN. The 1973 US–USSR treaty gives **no reduction for portfolio dividends** (IRS Table 1, C.I.S. row = 30%); only Kazakhstan and Ukraine have their own 15% treaties. The course explicitly targets CIS readers — this overstates a benefit 2× for exactly that audience.
**Done when:** rows corrected to 30% with a "USSR-successor treaty — no dividend relief" note, verified against IRS Tax Treaty Table 1.

### BL-204 · RUSSIA.md: the НДФЛ credit question is resolved — `S` · CPA-04 (RU only)
`ru/RUSSIA.md:310-313,341-344,537-538,574-576` (+ `ru/module-04:313`) still call the credit of US 30% withholding against Russian НДФЛ "под вопросом / НЕЯСНО." Article 22 (double-tax elimination) was **not** suspended and Minfin confirmed the зачёт under ст. 232 НК remains available — capped at the Russian 13/15%, with the excess US withholding lost.
**Done when:** wording replaced with the resolved rule (credit works, capped; surplus unrecoverable).

---

## Epic 1 — Site integrity & release safety (product owner lens)

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-105 | P1 | S | PO-05 | Delete orphaned root `index.md` (22 dead links, stale fork of ru/index.md) and reduce root `_config.yml` to a pointer — the workflow builds only `ru/` and `en/`; these files just invite edits to the wrong place. |
| BL-106 | P2 | S | PO-14 | Add `jekyll-sitemap` to both live configs/Gemfiles, commit `Gemfile.lock`, drop the redundant unpinned `just-the-docs` gem, add hreflang alternates linking `/ru/` ↔ `/en/` via `head_custom.html`. |
| BL-107 | P3 | S | PO-15 | Landing `index.html`: add `lang` attribute, OG/canonical tags, and 3 value-prop bullets + audience hints per language card (currently a bare language gate). |

## Epic 2 — Tax accuracy (CPA lens)

**P1 — worked-example and audience-critical errors**

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-205 | P1 | S | CPA-05 | `ru/RUSSIA.md:872` — "0% на купоны ОФЗ" is ~5 years stale: exemption abolished 1 Jan 2021 (102-ФЗ); coupons taxed 13/15%. RU only. |
| BL-206 | P1 | S | CPA-06 | Module 4 529 section: OBBBA raised the K-12 distribution limit to **$20,000/yr from 2026** and expanded qualified expenses; note state non-conformity. |
| BL-207 | P1 | S | CPA-07 | Module 4 dividend-type example: REIT dividends at $100k single are in the 22% bracket ($1,100), not 24%; add +3.8% NIIT to the $500k row. |
| BL-208 | P1 | S | CPA-08 + FRM-03 (×2) | Module 4 holding-period example taxes a $10k short-term gain at 37% footnoted "income $100,000+" — the 37% bracket starts at $640,600; at $100k it's 22–24%. ~3× overstated; contradicts the module's own later example. Recompute at 24% or fix the footnote. |
| BL-209 | P1 | S | CPA-09 | Module 8 1099-B diagram: Box 1b/1c are swapped (1b = date acquired, 1c = date sold) and Box 1g is "wash sale loss disallowed," not "gain/loss" (gain/loss is computed on Form 8949). Contradicts module 4's correct text. |
| BL-210 | P1 | S | CPA-10 | Module 4 W-8BEN box claims it provides "exemption from capital gains tax" — NRA portfolio gains are untaxed by statute, not by the form. Residual from prior finding #82. |
| BL-211 | P1 | S | CPA-11 | ADVANCED pro-rata warning: add SEP/SIMPLE IRA aggregation and the **Dec 31 year-end** measurement (Form 8606 line 6). Residual from prior C33. |
| BL-212 | P1 | S | CPA-12 | NON-RESIDENTS quotes IBKR **Lite** $0 commissions — Lite is US-residents-only; non-residents get Pro tiered pricing. Materially misleading for the page's entire audience. |
| BL-213 | P1 | S | CPA-13 | NON-RESIDENTS country notes: Germany Sparerpauschbetrag is €1,000/€2,000 (since 2023), not €801; UK retail generally **cannot buy US-domiciled ETFs** (PRIIPs) — replace the "US ETFs in ISA" line with UCITS + UK reporting status guidance. |
| BL-214 | P1 | S | CPA-14 | `ru/RUSSIA.md` never mentions ЛДВ (ст. 219.1) — and critically, from 1 Jan 2025 it **no longer applies to foreign securities**. Readers with pre-2022 US holdings may wrongly assume a 3-year exemption. RU only. |

**P2/P3 — corrections and gap-fills**

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-215 | P2 | S | CPA-15 | `ru/RUSSIA.md:307-308` conflates the RF decree (08.08.2023, №585) with the US counter-suspension (effective 16.08.2024) — state both events. RU only. |
| BL-216 | P2 | S | CPA-16 | `ru/RUSSIA.md:633-636` ОДДС fines are tiered one-time amounts (КоАП 15.25), not "300–500 руб за каждый день." RU only. |
| BL-217 | P2 | S | CPA-17 | `ru/RUSSIA.md:950-951` "налогообложение крипты непрозрачно" — stale: since 2025 (418-ФЗ) crypto sales are НДФЛ 13/15% with defined rules. RU only. |
| BL-218 | P2 | S | CPA-18 | GLOSSARY RMD entry: drop the "reaching 74 after 2032" clause (1959-cohort drafting glitch); keep "born 1960+ → 75 per IRS proposed regs," matching module 4's table. |
| BL-219 | P2 | S | CPA-19 | Module 4 RMD age table: "1950 or earlier → 70½" is wrong for births 7/1/1949–1950 (age 72 under SECURE 1.0) — split the row. |
| BL-220 | P2 | S | CPA-20 | Module 4 penalty-exceptions table: add the two SECURE 2.0 exceptions effective 2024 — emergency personal expense ($1,000/yr) and domestic-abuse distributions. |
| BL-221 | P2 | S | CPA-21 | FAQ #13: "Dividends: 0–20%" is only qualified dividends — non-qualified (REITs, bond funds) are ordinary income up to 37%. |
| BL-222 | P2 | S | CPA-23 | `VERIFIED-FACTS.md`: add the figures the course now states but the facts file doesn't cover (2026 MFJ LTCG breakpoint, 2025 breakpoints, Trad-IRA deduction phase-outs, $150k Roth catch-up wage threshold, QCD $111k) — "this file wins" invites drift otherwise. |
| BL-223 | P3 | S | CPA-22 | ADVANCED: one-line callouts for OBBBA's 2026 charitable changes (0.5% AGI floor; non-itemizer deduction) in the DAF section, and up-to-85% SS taxability in the Social Security section. |

## Epic 3 — Investment & risk accuracy (FRM/investor lens)

**P1 — arithmetic errors and philosophy breaches**

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-301 | P1 | S | FRM-02 | Module 4 Traditional-IRA withdrawal example taxes $80k gross as fully taxable ($9,104, ~11.4%) — ignores the MFJ standard deduction and partial SS taxation; real tax ≈ $2–4k. ~3× overstatement distorting the Roth-vs-Traditional comparison. Either label as simplified or recompute. |
| BL-302 | P1 | S | FRM-04 | VISUAL-GUIDE expense-ratio table understates fee drag (1.00% ER → $574,350, not $614,000) and contradicts EXERCISES Exercise 5, which computes the same case correctly. Recompute all rows with FV = 100k×(1.07−ER)^30; fix the "$142,000 lost" bar (~$179k). |
| BL-303 | P1 | S | FRM-01 | Module 6 rebalancing example: $100k stocks + $20.4k bonds = 83/17 drift, not the stated "87%/13%." Recompute. |
| BL-304 | P1 | S | INV-06 | INVESTOR-STORIES Case 4: passive phase numbers are mutually impossible (13%/yr table + $2k/mo on $75k ⇒ ~$440k, story says $280k and "$37k growth" ⇒ ~3%/yr). Recompute one way. |
| BL-305 | P1 | S | INV-04 | ETF-ANALYSIS "Aggressive" model portfolio bakes in QQQ 20% — contradicts module 6's own ≤10% optional-tilt rule and the Bogleheads philosophy (aggressive = more equity, not a NASDAQ-100 bet). Replace with broad-market 100%-equity mix. |
| BL-306 | P1 | S | INV-02 | Module 5 lists 3M as a "60+ year" Dividend Aristocrat — 3M cut its dividend in 2024 and left the index in 2025. Remove or convert to a cautionary example; verify remaining streaks. |
| BL-307 | P1 | S | INV-03 | Module 3 ETF table still shows VEA 0.05% / VWO 0.08% — the May fix updated only module 6 (0.03%/0.06%). Sync; re-verify VNQ. Residual from prior #12. |

**P2/P3 — staleness and consistency**

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-308 | P2 | S | FRM-07 | Module 7 COVID case understates the recovery ($15,500/+55% vs actual ~+75% to Jan 2025) and all four crisis timelines stop at "January 2025" — 18 months stale. Refresh endpoints. |
| BL-309 | P2 | S | INV-07 | FAQ #21 growth table mixes monthly and annual compounding conventions across rows; align with module 5's monthly figures ($1.13M at 30y). |
| BL-310 | P2 | S | INV-05 | ETF-ANALYSIS claims VTI vs VOO "~0.5%/yr difference, VTI potentially higher" — real long-run gap is ~0.1–0.2 pp and VOO led the last decade. Reword as near-identical, direction varies. |
| BL-311 | P2 | S | FRM-06 | Module 7 age-allocation table (60/40 → "−35%") conflicts with the same module's 2008 numbers (~−30%). Align rows or footnote assumptions. Residual from prior #69. |
| BL-312 | P2 | S | FRM-05 | VISUAL-GUIDE early-start example: Investor A's $314k doesn't reproduce under the convention used for B (should be ~$368k — which strengthens the point). Recompute. |
| BL-313 | P2 | S | FRM-08 | ADVANCED I-Bond example quotes a Jan-2025 composite of ~4.20%; the actual Nov 2024–Apr 2025 composite was 3.11%. Use real figures or label purely hypothetical. Verify against TreasuryDirect. |
| BL-314 | P2 | S | INV-08 | ADVANCED calculator list: i-orp.com is dead (~2022); NewRetirement rebranded to Boldin (2024). Replace/update; verify links. |
| BL-315 | P2 | S | INV-09 | SOURCES.md staleness: Mind the Gap figure conflicts with module 7's newer edition; SPIVA year lags; 2022 crisis marked "Ongoing" though recovery completed Jan 2024. |
| BL-316 | P2 | S | INV-10 | Top-holdings tables (modules 2/6, ETF-ANALYSIS) still show AAPL #1 ~7% / NVDA ~3–6% — NVDA is the largest holding as of mid-2026 and top-10 concentration ~38–40%. Refresh with as-of dates, verify against fund pages. |
| BL-317 | P3 | S | INV-11 | Module 6 sector SPDR ER 0.10% → current 0.08–0.09%; verify and stamp. |
| BL-318 | P3 | S | INV-12 | Module 5 practice task asks readers to pick the "most attractive" of JNJ/KO/PG — a single-stock selection exercise against the course's own rules. Reframe as metrics-reading or compare SCHD vs VYM. |
| BL-319 | P3 | S | INV-14 | Module 0 "HYSA 4–5%" is drifting stale after 2025–26 Fed cuts (~3.5–4.3%); use a range + "check current rates." |

## Epic 4 — Bilingual sync & content ops (product owner lens)

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-401 | P1 | M | PO-06, PO-03 | **CI parity gate:** a PR check that (a) link-checks internal links against declared permalinks and (b) diffs RU↔EN heading skeletons + file lists (whitelisting RUSSIA.md). Would have caught BL-103/104 and TLDR drift. The sync policy currently exists only as text and fails in both directions. |
| BL-402 | P1 | M | PO-06 | EN `TLDR.md` is a completely different document from RU (11 unrelated sections vs 13) — the #2 nav item. Re-derive EN from RU. Also re-align INVESTOR-STORIES structure (Case 5 exclusion stays, per policy). |
| BL-403 | P2 | S | PO-07 | 12 pages per language (incl. the most action-oriented: TLDR, QUICKSTART, CHECKLISTS) lack the body education-not-advice disclaimer the project content guidelines require on every page. Add the standard blockquote under each H1. |
| BL-404 | P2 | S | PO-08 | Only 6 of 31 RU pages carry freshness dates; RUSSIA.md and TOOLS.md — the fastest-decaying pages — have none. Add `last_reviewed` front matter rendered near the H1; stamp RUSSIA/TOOLS/QUICKSTART first. |
| BL-405 | P2 | S | PO-09 | Merge near-duplicate `ABOUT.md` / `about-course.md`; publish CHANGELOG as a child page (the hub promises a changelog that is unreachable — the audit history is a trust asset, show it). |
| BL-406 | P2 | S | PO-10 | Reconcile difficulty labels (index.md says Module 8 🟡, modules.md says 🔴) and either give ADVANCED the nav parent the audiences hub promises or drop it from that table. |

## Epic 5 — Pedagogy & learner journey (product owner lens)

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-501 | P2 | M | PO-11 | The practice hub promises exercises "for every module," but M2/M4/M5/M8 have none — practice stops where difficulty peaks. Add 3–4 exercises (e.g., compare two broker fee schedules; classify account types by tax treatment) or soften the hub copy. |
| BL-502 | P3 | L | PO-12 | Module 4 is 4.7× module 1 (1,314 lines) with a non-credible "~45 min" estimate — the likely main drop-off point. Split into "Brokers & accounts" + "Taxes for investors" (the stale modules.md table already implies this split); recalibrate all time estimates from word counts. |
| BL-503 | P3 | S | PO-16 | The 60+-term glossary is never linked from any module; language toggle drops to the homepage instead of the equivalent page. Add per-module glossary footer links; document per-page language switching as follow-up. |

## Epic 6 — Engagement & growth opportunities (product owner lens)

The site has zero retention or measurement machinery. Sequence: measure first, then invest.

| ID | Pri | Eff | Source | Item |
|----|-----|-----|--------|------|
| BL-601 | P2 | S | PO-13 | Privacy-friendly analytics (Plausible/GoatCounter) — measure express-vs-standard path split and module-4 drop-off **before** funding BL-502. |
| BL-602 | P2 | M | PO-13 | Client-side progress tracking: localStorage "mark module done" checkboxes + progress bar in the theme. Biggest retention lever available to a static site. |
| BL-603 | P3 | M | PO opp. 3 | Interactive JS quizzes with scoring, replacing raw `<details>` Q&A (pairs with BL-102). |
| BL-604 | P3 | S | PO opp. 4 | Newsletter capture for the natural annual hook ("2027 IRA/401(k) limits are out") — a Buttondown/form embed suffices. |
| BL-605 | P3 | M | PO opp. 5 | Landing-page segmentation wizard (3 questions → US resident / non-resident / RU path), replacing the decision tree buried in audiences.md. |
| BL-606 | P3 | M | PO opp. 7 | Client-side completion certificate after the module-8 final test — shareable, zero backend. |
| BL-607 | P3 | S | PO opp. 8 | Per-page "Was this helpful?" feedback link (GitHub issue template or form) — current feedback path requires a GitHub account, a mismatch for the retail audience. |

---

## Suggested sprint plan

1. **Sprint 1 (safety + trust):** all 8 × P0, then BL-105, BL-401 (CI gate). Roughly one focused day of content edits plus the workflow/config changes.
2. **Sprint 2 (accuracy):** Epic 2 & 3 P1 items (BL-205…214, BL-301…307), BL-402 (EN TLDR).
3. **Sprint 3 (ops + polish):** P2 items across epics; start BL-601/602 (analytics + progress) to inform whether BL-502 (module-4 split) is worth its L cost.
4. **Backlog grooming note:** every "verify" item (BL-313, 316, 317, 319, BL-203) must be checked against the primary source at fix time, per the course's own rule in `REMEDIATION-PLAN-2026.md`.

## Overall assessment by lens

- **Investor/FRM:** conceptual risk framework is now better-calibrated than most retail courses (sequence risk, regime-dependent correlations, duration risk, nominal-vs-real all correctly taught). Residual defects are concentrated in secondary worked examples — arithmetic slips and mid-2026 staleness — plus one philosophy breach (QQQ 20% as default "aggressive").
- **CPA:** the May fix wave was implemented accurately (every recomputed example from those commits is sound), but it introduced one systematic error (1099-DIV Box 6→7), left a cluster of pre-existing bracket errors in module-4 examples, and the RU-only Russia/CIS layer has materially stale items (USSR-treaty rates, ОФЗ coupons, the resolved Art. 22 credit, ЛДВ exclusion).
- **Product owner:** strong content core (consistent module scaffolding, objectives, quizzes, five learning paths) inside an unmaintained product wrapper: production deploys from WIP branches, every quiz renders broken, the RU module hub misdescribes the course, ~29 footer links 404, and the RU↔EN sync policy has no enforcement. Fix the four ship-blockers, add the CI parity gate, then add measurement before writing new content.
