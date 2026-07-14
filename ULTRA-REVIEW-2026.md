# Ultra-Quality Review — July 2026

> Third-pass deep review of the bilingual US investing course, run as **six parallel expert clusters** with every numeric example recomputed, external facts verified against primary sources (IRS pubs, Rev. Procs., КоАП/НК РФ, IRS treaty tables, Vanguard/Morningstar), and a **real Jekyll build** of both sites used as ground truth for all rendering findings. Review date: 2026-07-13.
>
> This pass followed the merged May-2026 four-lens audit and the July Sprint-1 fixes (`BACKLOG.md`). It targeted what those missed — plus, critically, **regressions the Sprint-1 fixes themselves introduced**. All findings were fixed on branch `claude/investment-course-review-y8n83t`.

## Method

| Cluster | Scope | Findings |
|---|---|---|
| Tax core | module-04, module-08, CHECKLISTS, FAQ (tax) | 9 |
| Cross-border | ADVANCED, NON-RESIDENTS, RUSSIA | 15 |
| Foundations | modules 0–3, GLOSSARY, VISUAL-GUIDE, EXERCISES, TEMPLATES | 14 |
| Strategy / risk | modules 5–8, ETF-ANALYSIS, INVESTOR-STORIES, TLDR, QUICKSTART | 20 |
| RU↔EN divergence | all 31 file pairs (numeric-token + claim diff) | 8 |
| Product / rendering | real Jekyll build, HTML output, anchors, CI-gate audit | 8 |

Every dollar figure and worked example was recomputed independently; every finding was marked CONFIRMED (verified against arithmetic or a primary source) or NEEDS-VERIFICATION. Fixes were applied by six file-partitioned agents, then **centrally verified** by the reviewer: arithmetic spot-checks, a full rebuild of both sites, the build-HTML regression guard, an anchor audit against real generated IDs, and the parity gate — all green.

## The headline result: three P0 rendering regressions the earlier audits could not see

The earlier audits were markdown-only and never built the site. A real build exposed three production-breaking defects:

1. **Every quiz was broken — and Sprint-1 made it worse.** The BL-102 fix (`parse_block_html: true`) caused kramdown to emit escaped `</summary>`/`</details>` as visible text **and leave every answer permanently exposed** (the `<summary>` never closed). Fixed with `<summary markdown="span">` across all 168 quiz blocks, verified against the real build.
2. **Site search was silently dead** on both languages — a `defaults` block wrapped the theme's `search-data.json` in an HTML layout, so lunr.js got HTML instead of JSON. Removed; now 884 valid search entries.
3. **A third of the EN site was missing from navigation** — 10 pages' `parent:` referenced emoji-prefixed hub titles that just-the-docs matches exactly. Fixed; all 30 EN pages now in the sidebar, no dead breadcrumbs.

A **build-time CI guard** (`scripts/check-built-html.sh`, wired into `deploy.yml`) now fails the build if either regression class recurs — closing the blind spot that let all three ship.

## Highest-severity content findings

**Cross-border (the RU-resident reader acts on exactly these):**
- **IBKR mis-described as "sell-only / closed to Russians"** — in reality accounts stay open and US securities remain tradable; the true current risk (selective "Closing Only" closures since Nov-2024) was absent. Rewritten. (XB-01)
- **ОДДС 600k₽ reporting exemption does not apply to US accounts** (US isn't on the ФНС auto-exchange list) — the page implied small US accounts were exempt, inviting a compliance violation. (XB-02)
- **The main UCITS workaround is blocked by EU Reg. 833/2014 Art. 5f** for RF residents — added the warning. (XB-03)
- **The CIS treaty-rate correction (Sprint-1 BL-203) existed only in RU** — EN readers from Kazakhstan/Georgia/Armenia still saw "most countries: 15%". Ported the full CIS block + Cyprus + footnote to EN. (XB-07/SYNC-01)

**Tax core:**
- **Non-residents told to expect a 1099-DIV they never receive** (they get Form 1042-S); Box 4 mislabeled. (TAX-01)
- **Form 5329 callout cited the pre-2023 line layout** (52–54 → 52a/52b…54a/54b). (TAX-02)
- RU FAQ/final-test still promised the suspended 10–15% treaty rate to Russian readers. (TAX-06)

**Numbers that didn't reproduce:**
- **Fee examples understated drag ~7×** by computing ER on a never-growing balance — recomputed with compounding (e.g. QQQ→QQQM saving $1,500 → $10,300). (STR-02, FND-03, STR-17)
- **An EXERCISES answer key said a $1M goal was missed when it is actually met** (~$1,019,000). (FND-02)
- **Three INVESTOR-STORIES cases** had numbers that don't reproduce against real 2021–2023 markets. (STR-05/06/07)

**Staleness / philosophy:**
- **AMEX** taught as a current exchange (NYSE American since 2017). (FND-07)
- **QUICKSTART contradicted Module 8** on order type and lowered the emergency-fund bar to 1–2 months vs the course-wide 3–6. (STR-01, STR-19)
- Three subtly wrong GLOSSARY definitions (volatility≠return, buyback, TLH $3,000 "cap"). (FND-08/09/10)

## Fixes verified clean (Sprint-1 regression check)

All Sprint-1 edits were re-verified in the current files and confirmed correct: 1099-DIV Box 7 (both languages), the removed RMD-penalty box, the CIS rate table + footnote placement, the RUSSIA Art. 22 credit wording and suspension dates, and the module hub. The one gap — BL-203 not mirrored to EN — is now closed.

## Outcome

**74 findings across six clusters, all fixed** and delivered as seven verified commits. Final state, confirmed by a full rebuild of both sites:

- Both sites build clean; all 168 quizzes render and hide answers correctly; search works (884 entries); all 30 EN pages navigable.
- Parity gate: 0 errors. Anchor audit: 0 broken anchors. Build-HTML guard: pass.
- CI hardened: `check-parity.py` gained vendor-skip, correct `../` resolution, and self-link-trap detection; a new build-time guard prevents rendering regressions; the content gate now runs inside the deploy pipeline.

Residual items deliberately left (verification requires live data this environment's proxy blocks, or they were pre-existing backlog entries): current ETF yields/AUM snapshots, the RU↔EN heading-skeleton drift on 6 reference pages (BL-402, warnings only), and a full EN TLDR re-derivation.
