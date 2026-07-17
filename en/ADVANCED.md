---
layout: default
title: "Advanced Strategies"
last_reviewed: 2026-07-15
parent: "For Different Audiences"
nav_order: 2
description: "Tax-loss harvesting, Roth conversion, Estate planning"
permalink: /ADVANCED/
---

# Advanced Investment Strategies

{% include reviewed.html %}

> **For experienced US residents** | Prerequisite: Completion of core course (modules 0-8)

> **IMPORTANT: This is educational material, not financial advice.**
>
> Advanced strategies require understanding of tax law and may not be suitable for all situations. Consult with a CPA or CFP before implementing.

---

## Table of Contents

1. [Tax Optimization](#tax-optimization)
   - Tax-Loss Harvesting
   - Asset Location
   - Roth Conversion
2. [Retirement Planning](#retirement-planning)
   - SECURE 2.0 Act
   - Withdrawal Strategies
   - Social Security
3. [Advanced Strategies](#advanced-investment-strategies)
   - Factor Investing
   - Alternative Assets
   - Direct Indexing
4. [Estate Planning](#estate-planning)

---

## Tax Optimization

### Tax-Loss Harvesting

```
What it is:
├── Selling losing positions to realize a loss
├── Using the loss to reduce taxes
├── Immediately buying a similar (but not identical) asset
└── Maintaining market exposure

Example:
├── Bought VTI for $10,000
├── VTI dropped to $8,000 (loss of $2,000)
├── Sell VTI, realize $2,000 loss
├── Immediately buy ITOT (similar ETF)
└── Savings: $2,000 × 15% = $300 in taxes
```

> ℹ️ **Important: TLH mainly DEFERS tax, it doesn't erase it.**
> Buying the replacement (ITOT) gives you a lower basis, so the
> harvested loss largely resurfaces as a bigger future gain. The
> durable benefit comes from the deferral (time value of money), the
> up-to-$3,000/yr offset against ordinary income at a higher rate
> than LTCG, and the step-up at death or a charitable donation of
> the appreciated shares.

#### Tax-Loss Harvesting Rules

```
Wash Sale Rule (30-Day Rule):
├── Cannot buy "substantially identical" asset
├── 30 days BEFORE or AFTER the sale
├── Otherwise, loss is disallowed
└── Applies to ALL your accounts (including IRA)

What counts as "substantially identical":
├── Same asset (VTI → VTI) ❌
├── ETF tracking same index from different provider ⚠️ (debatable)
├── Similar but different index ✓
└── Example: VTI (Total Market) → VOO (S&P 500) ✓

Conservative (defensible) approach — swap to a DIFFERENT index:
├── VTI (Total Market) ↔ VOO (S&P 500)
├── VOO (S&P 500) ↔ VXF (Extended Market) or VTI (Total Market)
├── VXUS (total ex-US) ↔ a different international index
└── BND (aggregate) ↔ a different bond index

⚠️ Gray area — swapping WITHIN the same index:
├── VTI ↔ ITOT, SCHB, SPTM (all = Total Market)
├── VOO ↔ IVV, SPY, SPLG (all = S&P 500)
├── The IRS has never ruled that two ETFs tracking the same
│   index are NOT "substantially identical"
└── This is an unsettled interpretation, not a green light — at your own risk
```

#### When Tax-Loss Harvesting Makes Sense

```
✓ Makes sense when:
├── You have realized gains to offset
├── High income (high tax bracket)
├── Taxable account (NOT IRA/401k!)
├── Loss is substantial (>$1,000)
└── Long investment horizon

✗ Does NOT make sense when:
├── Low income (0% capital gains rate)
├── Only tax-advantaged accounts
├── Loss is small (fees will eat the benefit)
├── Money needed soon
└── High volatility (wash sale risk)

Limitations:
├── Maximum $3,000 losses against ordinary income per year
├── Excess carries forward to future years
└── Unlimited against capital gains
```

#### Automating Tax-Loss Harvesting

```
Services with automatic TLH (fees as of writing —
verify current terms with the provider):
├── Wealthfront — from $500; index-level TLH at NO extra cost
│   (the 0.25%/yr account fee still applies)
├── Betterment — from 0.25% annually
├── Vanguard Digital Advisor — ~0.15% (net fee)
└── Fidelity Go — no fee up to $25k

Direct Indexing (advanced level):
├── Buying individual stocks instead of ETF
├── TLH at the individual-stock level, not just the index
├── More optimization opportunities
├── Minimum usually $100,000+ (Wealthfront's standalone
│   S&P 500 Direct / Nasdaq-100 Direct start at $5,000)
└── Providers: Parametric, Aperio, Wealthfront
```

---

### Tax-Gain Harvesting

The mirror image of TLH. In a LOW-income year, if your **taxable income**
(not gross income) sits within the 0% long-term capital gains (LTCG)
bracket, you can SELL long-held appreciated shares and immediately BUY
them back — resetting (stepping up) your cost basis while paying **$0 in
federal tax** on that gain. The result: less taxable gain in the future.

```
How it works:
├── Sell shares with a LONG-TERM gain (held >1 year)
├── The gain fits inside the 0% LTCG bracket → $0 federal tax
├── Immediately buy the same fund back (basis is stepped up)
├── New, higher basis = less tax on a future sale
└── Unlike TLH, there is NO 30-day wait (see caveat (a))
```

0% LTCG bracket ceiling (2026, by taxable income):

| Filing status | 0% bracket ceiling (2026) |
|---------------|---------------------------|
| Single | ≈ $49,450 |
| Married filing jointly | ≈ $98,900 |

> ℹ️ Thresholds are indexed annually (Rev. Proc. 2025-32) — verify the
> ceiling for the current year. This is **taxable** income (after the
> standard or itemized deduction), not gross income.

```
Caveats — this is the whole point, get them right:

(a) The wash-sale rule does NOT apply to GAINS:
├── Wash sale only blocks a quick rebuy that harvests a LOSS
├── It does not apply to gains
├── You can rebuy the same fund immediately — no 30-day wait
└── BUT the rebuy resets the holding period — the new shares start a
    fresh clock, so only harvest gains on shares you can hold 1+ year,
    or later appreciation may be short-term (ordinary-rate)

(b) LTCG "stack" ON TOP of ordinary income:
├── Ordinary income "fills up" first; LTCG stack on top
├── Qualified dividends & fund cap-gain distributions ALSO sit
│   in these brackets and fill the 0% room FIRST — count them too
├── 0% applies only to the gain BELOW the bracket ceiling
├── Anything above the ceiling spills into the 15% bracket
└── So harvest gains ONLY up to the remaining room under the ceiling

(c) The gain RAISES your MAGI/AGI — knock-on effects:
├── ACA (Obamacare) premium subsidies may shrink
├── More of your Social Security becomes taxable (up to 85%)
├── IRMAA — Medicare premium surcharges (Part B/D)
└── Look at the whole picture, not just the 0% rate

(d) STATE tax may still apply:
├── 0% federal ≠ 0% in your state
└── In income-tax states the gain is often still taxed

(e) It pairs with a "low-income year":
├── Naturally combines with the Roth Conversion Ladder (below)
├── Early retirement, a sabbatical, a gap year between jobs
└── Plan gains + conversions so you don't breach the ceiling
    (a conversion also fills the bracket and competes for the same room)
```

> 💡 **Example.** A single retiree with $30,000 of taxable income has
> ≈ $19,450 of headroom below the 0% ceiling (≈ $49,450). They sell VTI
> with a $19,000 long-term gain and rebuy it immediately: federal tax on
> the gain is **$0**, and the basis is stepped up by $19,000. Another ~$450
> of gain on top and the excess would have fallen into the 15% bracket.
>
> ⚠️ This is educational material, not tax advice. Realizing the gain
> raises MAGI (ACA, SS taxation, IRMAA) and may be taxed by your state —
> model the full effect and check with a CPA/CFP.

---

### Asset Location

```
The idea:
├── Different assets have different tax efficiency
├── Placing in the right account type saves taxes
└── NOT to be confused with Asset Allocation (portfolio mix)

Three account types:
├── Taxable — taxes every year on dividends/gains
├── Tax-Deferred (Traditional IRA/401k) — tax on withdrawal
└── Tax-Free (Roth IRA/401k) — no taxes at all
```

#### Optimal Placement

```
In TAX-ADVANTAGED accounts (IRA, 401k):
├── Bonds (high interest = ordinary income)
├── REITs (dividends taxed as ordinary income)
├── Actively managed funds (frequent trades)
├── High-dividend stocks
└── TIPS (inflation-protected bonds)

In TAXABLE accounts:
├── Total market / S&P 500 ETF (low turnover)
├── Growth stocks (fewer dividends)
├── Tax-managed funds
├── Municipal bonds (for high earners — see rule below)
└── International stocks (Foreign Tax Credit!)

In ROTH (best for growth):
├── Assets with maximum growth potential
├── Small-cap stocks
├── Emerging markets
└── Whatever will grow most by retirement
```

> ℹ️ **Municipal bonds — only at high brackets.** Compare via the
> taxable-equivalent yield = muni yield / (1 − marginal rate). Munis
> generally beat taxable bonds only at roughly the 32%+ federal bracket
> (higher once you add state tax) AND only once tax-deferred space for
> taxable bonds is exhausted — otherwise "bonds in tax-deferred" from the
> table above often dominates munis entirely.

> ℹ️ **AMT almost certainly doesn't affect you.** The Alternative Minimum
> Tax (AMT) targets aggressive tax schemes and is largely irrelevant to an
> ordinary index investor — especially since the OBBBA (2025) kept the AMT
> exemptions high. Two exceptions where it can still surface:
> (1) **private-activity-bond** interest inside some municipal-bond funds
> is an AMT preference item (keep it in mind for the muni-fund choice
> above); (2) exercising **ISOs** (incentive stock options). Outside those
> two cases, there is nothing about AMT to worry about.

#### Optimization Example

```
Portfolio: $500,000
Allocation: 60% stocks / 30% bonds / 10% REITs

Accounts:
├── 401(k): $200,000
├── Roth IRA: $100,000
└── Taxable: $200,000

Optimal placement:
┌─────────────────────────────────────────────────────┐
│ 401(k) $200,000:                                    │
│ ├── BND (bonds): $150,000                           │
│ └── VNQ (REITs): $50,000                            │
├─────────────────────────────────────────────────────┤
│ Roth IRA $100,000:                                  │
│ ├── VTI (US stocks): $80,000                        │
│ └── VWO (Emerging): $20,000                         │
├─────────────────────────────────────────────────────┤
│ Taxable $200,000:                                   │
│ ├── VTI (US stocks): $170,000                       │
│ └── VXUS (international): $30,000                   │
│     → Foreign Tax Credit!                           │
└─────────────────────────────────────────────────────┘

Savings: approximately 0.2-0.5% annually
on $500,000 = $1,000-2,500/year
```

> ℹ️ **How to claim the Foreign Tax Credit (1099-DIV Box 7).**
> Foreign tax is claimed as a credit on Schedule 3 (Form 1040), Part I, line 1.
> Under the de-minimis exception you can claim it with NO Form 1116 if all of
> these hold: total creditable foreign tax is ≤ $300 ($600 MFJ), all foreign-
> source income is passive-category, AND all of it was reported on a 1099-DIV/
> 1099-INT/K-1/K-3. For index-fund investors this is almost always the case.
> Above that threshold, Form 1116 is required (and the credit may be limited).
> Alternatively, foreign income tax can be taken as an itemized deduction on
> Schedule A instead of a credit (elected year by year; you can't do both for
> the same taxes).
>
> *This is educational material, not tax advice. Verify on IRS.gov.*

> ⚠️ **Caution: the same ticker in taxable AND an IRA is a wash-sale trap.**
> In the example above, VTI sits in both the Roth IRA ($80,000) and the
> taxable account ($170,000). If you harvest a VTI loss in taxable and your
> IRA/Roth buys VTI within 30 days before or after (via DRIP or a rebalance),
> the loss is disallowed PERMANENTLY — with no basis add-back in the IRA
> (Rev. Rul. 2008-5). Merely co-holding VTI isn't a violation, but a purchase
> inside that 61-day window triggers it. Fix: turn off DRIP on VTI in the IRA,
> or hold a different (not "substantially identical") fund there.

---

### Roth Conversion

```
What it is:
├── Moving money from Traditional IRA/401k to Roth
├── Pay tax now
├── Future growth — tax-free
└── No RMD (Required Minimum Distributions)

When it's beneficial:
├── Income now is lower than expected in retirement
├── Tax rates will rise in the future
├── Want to leave inheritance (Roth is better)
├── Have money outside IRA to pay the tax
└── Young age (more time for growth)
```

#### Roth Conversion Ladder (for early retirement)

```
The problem:
├── Money is in Traditional 401k/IRA
├── Want to retire before age 59.5
├── Early withdrawal = 10% penalty
└── How to access without penalty?

Solution — Roth Conversion Ladder:
├── Convert a portion Traditional → Roth each year
├── After 5 years, each year's CONVERTED principal (the amount
│   that was taxed at conversion) can be withdrawn penalty-free
│   before 59.5 — this is NOT "contributions" (those follow a
│   different rule)
├── The 5-year clock runs from Jan 1 of the conversion year
├── Each year a new portion "unlocks"
└── Pay tax at current (low) rate

ℹ️ Don't confuse these: regular Roth contributions can be
withdrawn anytime, penalty-free and with no waiting period.
Here we mean the converted amount — it has its own 5-year clock
(IRC §408A(d)(3)(F)). Once you reach 59.5, this rule is moot.

Example:
├── 2025: convert $50,000 (pay ~$6,000 tax)
├── 2026: another $50,000
├── ...
├── 2030: first $50,000 available penalty-free
├── 2031: next $50,000 available
└── And so on
```

#### Backdoor Roth IRA

```
The problem:
├── Income above Roth IRA limit
├── 2026: phase-out $153,000–$168,000 (single) / $242,000–$252,000 (married)
│   (2025 for reference: $150,000 / $236,000)
└── Direct Roth contribution prohibited

Solution — Backdoor Roth:
1. Contribute to Traditional IRA (non-deductible)
2. Immediately convert to Roth IRA
3. Pay tax only on growth (if immediate — nearly $0)

⚠️ Pro-rata Rule:
├── If you have other Traditional IRAs with pre-tax money
├── The rule aggregates ALL Traditional + SEP + SIMPLE IRAs
│   by the Dec 31 year-end balance (Form 8606, line 6)
├── Conversion is taxed proportionally
├── Primary fix: roll pre-tax into a 401(k) (cheap and clean)
└── Or convert ALL pre-tax IRA balances to Roth — but this is
    fully taxable this year; only worth it if the balance is small
    or you specifically want a full conversion

Mega Backdoor Roth:
├── Through after-tax contributions to 401(k)
├── Limit: $72,000 in 2026 — IRC §415(c) annual additions (employee + employer
│   + after-tax), EXCLUDING the 50+ catch-up (so 50+ total $80,000; 60-63 $83,250)
├── Requires employer plan that allows it
└── After-tax room = §415(c) limit ($72,000 in 2026) − your own
    elective deferrals − employer contributions; a large employer
    match reduces or eliminates this room
```

> 🔴 **MANDATORY: File Form 8606 for every Backdoor Roth.**
> Every non-deductible Traditional IRA contribution AND every Roth conversion
> must be reported on Form 8606 for that tax year:
> - **Part I** records your after-tax basis (it carries forward year to year
>   on line 14 — keep every Form 8606 permanently);
> - **Part II** reports the conversion and computes the taxable amount.
>
> Without an 8606 on file, the IRS has no record the money is after-tax and may
> treat the whole conversion as taxable (double taxation of the same dollars).
> But the basis is **not** forfeited — file the missing/late 8606 (retroactively,
> and standalone, as long as you can substantiate the contributions) to preserve
> it; a delinquent 8606 carries a $50-per-form penalty unless you show reasonable
> cause. For the **Mega Backdoor** (after-tax
> 401(k)), the plan administrator tracks basis — NOT Form 8606.
>
> *This is educational material, not tax advice. Verify against the Form 8606 instructions on IRS.gov.*

---

## Retirement Planning

### SECURE 2.0 Act (2022-2024)

```
Key changes:

RMD (Required Minimum Distributions):
├── Starting age: 73 (was 72)
├── From 2033: age 75
├── Penalty for missing: 25% (was 50%)
├── Can correct within 2 years → 10%
└── Roth 401(k) — NO more RMD!

A missed RMD — how to handle it (Form 5329, Part IX):
├── The excise tax is self-reported on Form 5329, Part IX
├── To get the reduced 10%: take the shortfall distribution within
│   the correction window (earliest of: IRS deficiency notice mailed,
│   tax assessed, or end of the 2nd tax year after the tax year) AND
│   file Form 5329
├── To request a full reasonable-cause waiver: complete lines 52-53,
│   enter "RC" and the amount to be waived next to line 54, subtract
│   it, and attach a brief explanation
└── The IRS commonly grants reasonable-cause waivers once the shortfall
    is corrected, but approval is not guaranteed — it "will review and
    decide"; merely "taking the missed RMD" without filing Form 5329
    secures neither the 10% rate nor the waiver

Catch-up contributions (for 50+):
├── IRA: $1,100 additional (2026)
├── 401(k): $8,000 additional (2026, for 50+)
├── For ages 60-63: enhanced catch-up of $11,250 (SECURE 2.0)
└── High earners (prior-year wages >$145k, indexed — $150k for 2025 wages):
    catch-up must be Roth — requirement is effective for 2026 (the Notice 2023-62
    transition period ended after 2025); IRS final regs generally apply from 2027,
    but good-faith compliance is required for 2026

New opportunities:
├── Automatic enrollment in 401(k) (from 2025)
├── Student loan payments = employer match eligible
├── Emergency savings account in 401(k)
├── 529 → Roth IRA (up to $35,000, after 15 years)
└── Retirement for part-time workers (500+ hours)
```

### Withdrawal Strategies

#### 4% Rule and Its Limitations

```
Classic rule:
├── Withdraw 4% in first year
├── Increase by inflation each year
├── In US historical backtests, an initial 4% withdrawal adjusted
│   for inflation survived 30 years in ~95% of sequences
│   (Trinity Study, 1998, 50/50 portfolio) — a backward-looking
│   US-historical success rate, NOT a forward guarantee
├── Bengen (1994) called the worst-case-survivable rate the SAFEMAX
└── Requires roughly a 50-75% equity allocation

Problems with the rule:
├── Doesn't account for current market valuations
├── Fixed withdrawal regardless of results
├── 30 years may not be enough
├── Low bond yields (historically)
└── Doesn't optimize taxes

Modern alternatives:
├── 3.3-3.5% for greater safety
├── Dynamic withdrawal strategies
├── Guardrails approach
└── Floor-and-upside strategy

Sequence-of-returns risk:
├── The central risk of the decumulation phase
├── Poor returns in the FIRST decade of retirement are far more
│   damaging than the same returns later
├── Withdrawing during a drawdown permanently shrinks the share
│   base — even a fine average return won't rescue the portfolio
└── Backtests rely on US data (survivorship/recency bias); in
    several other markets the 4% rate did not hold up (Pfau)
```

> 💡 **Up-to-date context:** In his 2025 book *A Richer Retirement*, William Bengen
> cites 4.7% as the worst-case SAFEMAX floor for a new diversified portfolio — not
> as his recommendation; he now suggests closer to ~5-5.5%. Morningstar's 2024
> "State of Retirement Income" report put the starting safe rate at ~3.7% (4.0% in
> the 2023 report). The 3.3-3.5% range is a conservative lower bound, not the only
> valid answer.
>
> ⚠️ All of these figures are backtest/model outputs sensitive to assumed asset
> allocation, market valuations, and inflation — they are not guarantees.

#### Variable Percentage Withdrawal (VPW)

```
The idea:
├── Withdrawal percentage depends on age and portfolio
├── Withdraw more when portfolio grows
├── Less when it falls
└── Adapts to reality

VPW table (% depends on allocation; below is 50/50,
with 60/40 stocks/bonds in parentheses):
├── Age 60: 4.5% (4.7%)
├── Age 65: 4.8% (5.0%)
├── Age 70: 5.2% (5.4%)
├── Age 75: 5.8% (6.0%)
├── Age 80: 6.8% (6.9%)
├── Age 85: 8.4% (8.5%)
└── Age 90: 11.6% (11.7%)

The percentage rises with age and exceeds 10% in the high 80s
(the table is not capped at 10%). For the canonical figures, see
the Bogleheads VPW wiki (link below).
```

> 📖 Canonical table: [Bogleheads — Variable percentage withdrawal](https://www.bogleheads.org/wiki/Variable_percentage_withdrawal)

#### Bucket Strategy

```
Idea: divide portfolio into "buckets" by time horizon

Bucket 1 — Cash (1-2 years of expenses):
├── High-yield savings account
├── Money market funds
├── Short-term Treasury bills
└── Goal: don't sell stocks in a downturn

Bucket 2 — Bonds (3-7 years of expenses):
├── Intermediate-term bonds (BND)
├── TIPS (inflation protection)
├── Investment-grade corporate
└── Replenishes Bucket 1

Bucket 3 — Stocks (8+ years of expenses):
├── VTI, VXUS
├── Maximum growth
├── Historically US equities have recovered over 8+ year horizons,
│   but this is NOT guaranteed — a prolonged bear market can still
│   force selling at depressed prices (sequence-of-returns risk);
│   the bucket structure reduces, but does not eliminate, that risk
└── Replenishes Bucket 2

Example for $1,000,000:
├── Bucket 1: $80,000 (2 years × $40k)
├── Bucket 2: $200,000 (5 years × $40k)
└── Bucket 3: $720,000 (growth)
```

### Social Security Optimization

> ℹ️ **Taxation of SS benefits:** up to **85%** of your Social Security benefit can be subject to federal income tax — the taxable share depends on your "combined income" (AGI + tax-exempt interest + ½ of benefits). Thresholds: for single filers none is taxed below combined income of **$25,000** and up to 85% is taxed above **$34,000**; for MFJ the thresholds are **$32,000** and **$44,000**. Like the NIIT thresholds, these are **not indexed to inflation** — so over time they reach more and more retirees. Factor this into IRA/Roth withdrawal planning.

```
When to start claiming:
├── Age 62: early — amount reduced by ~30%
├── Age 67 (FRA): full amount (for those born 1960+)
├── Age 70: maximum — increased by ~24%
└── After 70: no point in delaying

Example (FRA = $2,000/month):
├── At 62: $1,400/month
├── At 67: $2,000/month
├── At 70: $2,480/month
└── Difference over 20 years: $200,000+

When to claim early (62):
├── Poor health / low life expectancy
├── Need money now
├── Continue working (but earnings limit applies!)
└── Allows not touching investments

When to delay until 70:
├── Good health
├── Sufficient other resources
├── Spouse is significantly younger
├── Want to maximize survivor benefits
└── Break-even: ~80-82 years old

Spousal Benefits (while the spouse is alive):
├── Up to 50% of the spouse's PIA (max, at their full retirement age)
├── ⚠️ Does NOT grow by delaying to 70: delayed-retirement credits
│   raise the spouse's OWN benefit and the future survivor benefit,
│   but NOT the spousal benefit itself (capped at 50% of PIA)
└── Works as a top-up: if your own benefit is below 50% of the
    spouse's PIA, you are topped up to that level

Survivor Benefits (for the surviving spouse — this is where delay matters):
├── Up to 100% of the deceased spouse's benefit
├── Strategy: the higher earner delays to 70 → maximizes the
│   survivor benefit for the surviving spouse
└── The lower earner can claim earlier (at 62)
```

---

## Advanced Investment Strategies

### Factor Investing

```
Factors — characteristics explaining returns:

Value:
├── Cheap stocks by P/E, P/B
├── Historically +2-3% annually
├── ETFs: VTV, SCHV, VLUE
└── Risk: can lag for years (2010-2020)

Size:
├── Small-cap stocks
├── Historically +2% annually
├── ETFs: VB, SCHA, IJR
└── Risk: higher volatility

Momentum:
├── Stocks with recent gains continue rising
├── Historically +3-5% annually
├── ETFs: MTUM, QMOM
└── Risk: sharp reversals

Quality:
├── Profitable, stable companies
├── Historically +1-2% annually
├── ETFs: QUAL, SPHQ
└── Risk: overvaluation of "safe" companies

Low Volatility:
├── Less volatile stocks
├── Anomaly: better risk-adjusted returns
├── ETFs: USMV, SPLV
└── Risk: lags in bull markets
```

#### Small Cap Value (SCV)

```
Combination of two factors:
├── Small-cap (size)
├── Value (valuation)
└── Historically: ~3 pp vs the S&P 500

Data (1927-2023):
├── Large Growth: 9.5% annually
├── Large Value: 11.1% annually
├── Small Growth: 8.8% annually
├── Small Cap Value: 13.4% annually
└── Significant difference!

ETFs for SCV:
├── VBR (Vanguard Small Cap Value)
├── AVUV (Avantis US Small Cap Value) — more "pure"
├── SLYV (SPDR S&P 600 Small Cap Value)
└── IJS (iShares S&P Small-Cap 600 Value)

Risks:
├── High volatility
├── Can lag for 10+ years
├── Requires patience and discipline
└── Not suitable for short horizons
```

### Alternative Asset Classes

### Inflation Protection

#### I-Bonds and TIPS

```
I-Bonds (Series I Savings Bonds):
├── Inflation protection
├── Rate = fixed + inflation (CPI-U)
├── Limit: $10,000/year (electronic only)
├── ⚠️ Paper I-Bonds via tax refund ENDED January 1, 2025
├── Cannot sell in first year
├── 3-month interest penalty before 5 years
├── Not subject to state tax
└── Purchase: treasurydirect.gov

TIPS (Treasury Inflation-Protected Securities):
├── Principal grows with inflation
├── Traded on the market (can sell)
├── ETFs: VTIP (short-term), SCHP, TIP
├── Problem: "phantom income" in taxable
└── Better held in IRA
```

#### I-Bonds vs TIPS Comparison

| Feature | I-Bonds | TIPS (via ETF) |
|---------|---------|----------------|
| Purchase limit | $10,000/year | Unlimited |
| Liquidity | 1 year lock-up | Instant |
| Minimum | $25 | 1 ETF share price |
| State tax | No | Yes |
| Volatility | No | Yes (price fluctuates) |
| TreasuryDirect | Required | Through broker |
| For IRA | Cannot hold | Can hold |

#### How I-Bonds Work

```
I-Bond rate:
├── Fixed rate — set at purchase
├── Inflation rate — changes every 6 months
└── Composite rate = Fixed + (2 × Inflation) + (Fixed × Inflation)

Example (May 2026, 6-month rate):
├── Fixed rate: 0.90%
├── Inflation rate (semiannual): 1.67%
├── Composite: ~4.26% annually (verify on TreasuryDirect)
└── If inflation rises → rate rises

Historical perspective:
├── 2022 (peak inflation): I-Bonds yielded 9.62%!
├── 2023: dropped to 5-6%
├── 2024–2025: ~3–4% (Nov 2024 composite = 3.11%)
├── 2026: ~4.3%
└── I-Bonds CANNOT have negative rate
```

#### Example: I-Bonds During High Inflation

```
2022: Inflation reached 9.1%

What happened:
├── I-Bonds: +9.62% (composite rate)
├── S&P 500: -18%
├── BND (bonds): -13%
├── TIP (TIPS ETF): -12%
└── I-Bonds — best performer!

Why TIPS also fell:
├── Fed rate hikes → all bonds fall
├── TIPS trade on the market
├── Price falls when rates rise
└── I-Bonds don't trade → stable

Conclusion: I-Bonds — unique protection tool
```

#### Usage Strategy

```
Recommendation:
├── Max I-Bonds: $10,000/year per person (electronic only)
│   └── $10,000 through TreasuryDirect (treasurydirect.gov)
├── Remainder in TIPS ETF (if more needed)
└── Hold in tax-advantaged (TIPS) or separately (I-Bonds)

Optimal portfolio allocation:
├── 5-15% of bond allocation
├── More when approaching retirement
├── Less for younger investors
└── As part of Bucket 2 (medium term)

Practical steps for I-Bonds:
1. Create account at treasurydirect.gov
2. Link bank account
3. Buy each year (maximum $10,000)
4. Becomes liquid after 1 year
5. No penalty after 5 years
```

#### Historical Perspective: Assets During High Inflation

```
1970s: High inflation (10-14%)
├── Stocks: slow growth, volatility
├── Bonds: lost real value
├── Gold: +1,200% for the decade
├── Real estate: strong growth
└── TIPS/I-Bonds didn't exist

2022: High inflation (9.1%)
├── S&P 500: -18%
├── Bonds BND: -13% (rare decline!)
├── TIPS: -12% (rates rising)
├── I-Bonds: +9.62%
├── Commodities: +26%
├── Energy sector: +65%
└── 60/40 diversification didn't work

Lessons for investors:
├── Inflation — enemy of fixed income
├── Stocks protect long-term (grow with economy)
├── I-Bonds — unique risk-free instrument
├── TIPS needed, but price fluctuates
├── Commodities/REITs — partial protection
└── Long-term: stocks > inflation
```

#### Other Inflation Protection Tools

```
REITs (Real Estate Investment Trusts):
├── Real estate grows with inflation
├── Rent is indexed
├── ETFs: VNQ, SCHH
├── Downside: high volatility
└── Allocation: 5-10% of stocks

Commodities:
├── Direct inflation protection
├── ETFs: DBC, GSG
├── Downside: don't generate income
├── High volatility
└── Allocation: 0-5% (optional)

Gold:
├── Historical protection in crises
├── ETFs: GLD, IAU
├── Downside: doesn't generate income
├── Downside: high volatility
└── Allocation: 0-5% (optional)

Stocks (long-term):
├── Companies raise prices with inflation
├── Profits grow nominally
├── Best long-term protection
├── Downside: short-term volatility
└── Especially: consumer staples, utilities
```

#### When to Use

```
When to use inflation protection:
├── Approaching retirement (5-10 years)
├── In retirement (protect purchasing power)
├── High inflation (like 2022)
├── Conservative risk profile
└── As part of bond allocation

When NOT a priority:
├── Young age (30+ years to retirement)
├── Stocks — best long-term protection
├── Small portfolio (accumulate first)
└── Active accumulation phase
```

#### REITs (Real Estate Investment Trusts)

```
What they are:
├── Companies that own real estate
├── Required to pay 90% of income as dividends
├── Diversification from stocks
└── Inflation protection

Taxation:
├── Most dividends — ordinary income!
├── Not qualified dividends
├── Effective rate is higher
└── Better to hold in IRA

ETFs for REITs:
├── VNQ — Vanguard Real Estate
├── SCHH — Schwab US REIT
├── VNQI — International REITs
└── Expense ratio: 0.10-0.12%

Optimal allocation:
├── 5-15% of stock portfolio
├── Part of some Total Market (VTI contains ~4%)
├── Not required to add separately
└── Adds volatility in crises (2008, 2020)
```

### Direct Indexing

```
What it is:
├── Instead of ETF, buy individual index stocks
├── Own 50-500+ stocks directly
├── Can do tax-loss harvesting on each
└── Personalization (exclude companies)

Advantages:
├── More TLH opportunities
├── Exclude companies (ESG, conflict of interest)
├── Charitable giving of individual stocks
├── Better for inheritance transfer
└── Estimate: +0.5-1% after taxes

Disadvantages:
├── High minimum ($100,000-500,000)
├── Complexity and fees
├── Tracking hundreds of positions
└── Potentially higher bid-ask spread

Providers:
├── Parametric (part of Morgan Stanley)
├── Aperio (part of BlackRock)
├── Wealthfront Direct Indexing
├── Fidelity Managed FidFolios
└── Schwab Personalized Indexing
```

---

## Estate Planning

### Estate Planning Basics

```
Key documents:
├── Will — asset distribution
├── Living Trust — avoiding probate
├── Power of Attorney — financial decisions
├── Healthcare Directive — medical decisions
└── Beneficiary Designations — on accounts

Beneficiary Designations — CRITICALLY IMPORTANT:
├── Specified on each investment account
├── Take priority over will!
├── Update when circumstances change
├── Marriage, divorce, birth of children
└── Review annually
```

> 💡 **When does the federal estate tax even apply?**
> The 2026 exemption is **$15 million per individual** ($30 million per couple),
> made permanent by the OBBBA (2025) and indexed going forward. Most investors are
> below this threshold and owe no federal estate tax — but check your state's estate
> tax (some states have a much lower threshold).
> ⚠️ For **non-US residents**, the threshold is only $60,000 — see the section in [NON-RESIDENTS](/investing-course/en/NON-RESIDENTS/).

> ℹ️ **Form 706 and portability of the exemption (DSUE).**
> The estate-tax return is Form 706 (Form 706-NA for non-resident aliens with
> US-situs assets over $60,000). Deadline: 9 months after death (+6-month
> extension via Form 4768).
>
> To transfer a deceased spouse's unused exclusion (DSUE, up to the full $15M)
> to the surviving spouse, the executor MUST file a timely, complete Form 706 —
> even if the estate is below $15M and owes no tax (IRC §2010(c)(5)(A)). Missing
> the deadline is not necessarily fatal: under Rev. Proc. 2022-32, a below-
> threshold estate can make a late portability election by filing Form 706 within
> **5 years** of death, with no user fee. Bottom line: file timely (9 mo.) or
> within the 5-year late window, or the DSUE is lost.
>
> On step-up: most sub-$15M estates file no 706 at all; heirs establish the
> date-of-death values via appraisals and broker date-of-death statements. For
> taxable estates required to file a 706, consistent basis is reported to heirs
> via Form 8971/Schedule A (IRC §1014(f)/§6035), not the 706 itself.
>
> *This is educational material, not legal advice. Verify on IRS.gov.*

### Transfer on Death (TOD) and Step-up in Basis

```
TOD (Transfer on Death):
├── Taxable accounts transfer directly to beneficiaries
├── Avoids probate
├── Simple setup at broker
└── Free

Step-up in Basis — THE MAIN advantage:
├── Upon inheritance, cost basis = market price at date of death
├── All unrealized growth — tax-free!
├── Huge savings

Example:
├── Bought stock for $50,000
├── Grew to $500,000
├── Unrealized gain: $450,000
├── If sold during lifetime (single, little other income):
│   first ~$49,450 in the 0% LTCG bracket → $0; the rest
│   (~$384k, after the $16,100 std deduction) at 15% → ~$57,700;
│   + NIIT 3.8% on MAGI over $200k → ~$9,500; total ≈ $67,000
│   (state tax not included)
├── For high earners (taxable income > $545,500, single 2026)
│   the rate is 23.8% → ~$107,100
├── If heirs sell immediately after death: $0
└── Step-up wins either way!

Strategy:
├── Hold appreciated assets until the end
├── Spend IRA/401k first (no step-up)
├── Roth also no step-up, but no tax either
└── Taxable with growth — ideal for inheritance
```

### Stretch IRA and SECURE Act

```
Before SECURE Act (2019):
├── Heirs could "stretch" IRA over their lifetime
├── Small RMD each year
├── Decades of tax-deferred growth
└── Huge advantage

After SECURE Act:
├── 10-Year Rule for most heirs
├── Must empty IRA within 10 years
├── Large tax payments
└── Exceptions: spouses, minors, disabled

Strategies:
├── Convert to Roth during lifetime
├── Roth also 10 years, but tax-free!
├── Charitable giving through IRA (QCD)
├── Life insurance to offset taxes
└── Trust for distribution control
```

### Charitable Giving Strategies

```
Donor-Advised Fund (DAF):
├── "Charitable account"
├── Contribute money/assets
├── Immediate tax deduction
├── Distribute grants whenever you want
├── Appreciated securities — best method
└── Providers: Fidelity Charitable, Schwab Charitable

QCD (Qualified Charitable Distribution):
├── For age 70.5+
├── Directly from IRA to charity
├── Up to $108,000/year (2025), $111,000 (2026); amount is indexed
├── Satisfies RMD
├── Not included in income!
└── Better than withdrawal + donation

Appreciated Stock Donation:
├── Donate stocks with large gains
├── Deduction = market value
├── Avoid capital gains tax
├── Charity sells tax-free
└── Win-win situation
```

> ℹ️ **OBBBA changes from 2026:** for itemizers, charitable gifts are deductible only to the extent they **exceed a new 0.5%-of-AGI floor**. Separately, a permanent deduction was added for non-itemizers — up to **$1,000 (single) / $2,000 (MFJ)** of **cash** gifts **on top of** the standard deduction (it is subtracted after AGI, so it does **not** reduce AGI, and it does **not** cover gifts to a donor-advised fund). The 0.5%-of-AGI floor applies to §170 itemized deductions only — **QCDs are unaffected** (a QCD is an income exclusion under §408(d)(8), not a charitable deduction).

---

## Macroeconomic Context

### Impact of Interest Rates

```
Current situation (January 2026):
├── Inflation: decreased from peak 9.1% (June 2022)
├── Fed rate: began declining from peak 5.25-5.50%
├── Bonds: recovering after 2022 decline
└── Stocks: high valuations (CAPE ~30+)

Impact of rates on assets:
├── High rates → bonds fall
├── High rates → stocks (growth) suffer
├── Low rates → everything rises
├── Transition → volatility
└── Long-term: economy adapts

What investors should do:
├── DON'T try to predict rates
├── Maintain diversification
├── Bond duration matches horizon
├── Use opportunities (I-Bonds, TIPS)
└── Stick to the plan
```

### Market Valuations and Expected Returns

```
CAPE (Cyclically Adjusted P/E):
├── Current level: high (~30+)
├── Historical average: ~17
├── High CAPE → lower expected returns
└── BUT: doesn't predict short-term movements

Expected returns (next 10 years):
├── US stocks: 4-6% real (expert opinions)
├── International: possibly higher (lower valuations)
├── Bonds: ~2-3% real
└── These are ESTIMATES, not forecasts

What this means:
├── Returns may be lower than historical
├── Does NOT mean you should exit stocks
├── Diversification matters more
├── International allocation may help
└── Long-term, stocks still beat alternatives
```

---

## Advanced Investor Checklist

```
Tax optimization:
☐ Tax-loss harvesting set up (if taxable >$50k)
☐ Asset location optimized
☐ Roth conversion strategy considered
☐ Backdoor Roth (if high income)

Retirement planning:
☐ Know my withdrawal strategy
☐ Social Security optimization planned
☐ Bucket strategy or alternative ready
☐ SECURE 2.0 changes accounted for

Estate Planning:
☐ Beneficiary designations updated
☐ Have will / trust
☐ Understand step-up in basis
☐ Charitable giving strategy (if applicable)

Advanced strategies:
☐ Considered factors (value, small cap)
☐ REIT allocation determined
☐ I-Bonds / TIPS for inflation protection
☐ Direct indexing (if portfolio >$500k)
```

---

## Resources for Further Study

```
Books:
├── "The Bogleheads' Guide to Retirement Planning"
├── "How to Make Your Money Last" — Jane Bryant Quinn
├── "The Only Investment Guide You'll Ever Need" — Andrew Tobias
├── "Retirement Income Redesigned" — Harold Evensky
└── "The White Coat Investor" — James Dahle (for doctors/high income)

Online resources:
├── bogleheads.org/wiki — investing encyclopedia
├── earlyretirementnow.com — deep SWR analysis
├── portfoliocharts.com — portfolio visualization
├── firecalc.com — retirement simulation
└── ssa.gov — Social Security calculator

Calculators:
├── opensocialsecurity.com — SS optimization
├── ficalc.app — withdrawal-strategy simulator
├── cfiresim.com — Monte Carlo simulations
└── boldin.com — comprehensive planning (formerly NewRetirement)
```

---

> Tax law changes. Verify current information and consult with professionals.

---

[← Back to main course](/investing-course/en/) | [Glossary](/investing-course/en/GLOSSARY/)
