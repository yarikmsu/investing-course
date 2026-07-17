---
layout: default
title: "Module 4 · Taxes for Investors"
last_reviewed: 2026-07-15
parent: "Course Modules"
nav_order: 5.5
description: "US investment taxes: dividends, capital gains, non-residents, forms"
permalink: /module-04-taxes/
---

# Module 4 · Taxes for Investors

{% include reviewed.html %}

> ⚠️ **This is educational material, not financial advice.** Consult a tax professional before making decisions.

This is the second part of [Module 4](/investing-course/en/module-04-brokers-taxes/). It gathers everything about US investment taxation — kept separate so the main module on brokers and accounts stays compact.

## 📋 What You'll Learn

| | |
|---|---|
| **Level** | Intermediate |
| **Time** | ~25 minutes |
| **Prerequisites** | [Module 4: Brokers & Accounts](/investing-course/en/module-04-brokers-taxes/) |

After completing this part, you'll be able to:
- Know tax rates on dividends and capital gains
- Understand taxation for non-residents and Form W-8BEN
- Navigate tax forms and reporting (1099, W-8BEN, 1042-S)
- Calculate taxes on investment income

---

> 🌍 **Are you a non-US resident?** A separate detailed section is available:
> - **[NON-RESIDENTS](/investing-course/en/NON-RESIDENTS/)** — brokers, W-8BEN, taxes, Irish ETFs

---

## Investment Taxation (USA)

### Types of Investment Income

#### Dividends: Qualified vs Ordinary

> ⚠️ **Critically important to understand the difference:** The same dividend can be taxed at **0%** or **37%** depending on its type and your income!

**Qualified Dividends** — taxed at preferential rates (same as long-term capital gains):

```
Qualification criteria:
├── Dividends from American corporations
├── Or from qualified foreign companies
├── Stock held for at least 61 days
│   └── During 121-day period around ex-dividend date
└── Rates: 0% / 15% / 20% (same as LTCG)
```

**Ordinary Dividends** — taxed as ordinary income (up to 37%):

```
Always ordinary:
├── Dividends from REITs (real estate funds)
├── Dividends from MLPs/LPs (partnerships)
├── Interest from money market funds
├── Dividends on stocks held less than 61 days
└── Some foreign dividends
```

### 💡 Example: How Dividend Type Affects Tax

| Situation | $5,000 Dividends | Rate | Tax |
|-----------|------------------|------|-----|
| Qualified + income $40k (single) | From Apple | **0%** | **$0** |
| Qualified + income $100k (single) | From Apple | **15%** | **$750** |
| Ordinary + income $100k (single) | From REIT | **22%** | **$1,100** |
| Ordinary + income $500k (single) | From REIT | **35% + 3.8% NIIT** | **$1,940** |

> 💡 **Practical tip:** In taxable accounts, prefer ETFs with qualified dividends (VOO, VTI) over REIT funds (VNQ). REITs are better held in IRA, where dividend tax isn't charged annually.
>
> ℹ️ The rates above are marginal. Non-qualified REIT dividends qualify for the §199A (QBI) 20% deduction, so the effective rate is lower (e.g. ~17.6% instead of 22%).

#### Capital Gains

```
Short-Term:
├── Held asset less than 1 year
└── Rate: same as ordinary income (up to 37%)

Long-Term:
├── Held asset more than 1 year
└── Rate: 0% / 15% / 20%
```

### 💡 Example: Why Holding Period Matters

Let's say you bought stock and sold it for a **$10,000** profit.

| Scenario | Holding Period | Tax Rate | Tax | Net |
|----------|----------------|----------|-----|-----|
| **Short-term** | 6 months | 24%* | **$2,400** | $7,600 |
| **Long-term** | 2 years | 15%** | **$1,500** | $8,500 |
| | | **Difference** | **$900** | |

*At income ~$150,000 (24% rate); the 37% rate applies only above $640,600. **At income $50,000-$500,000.

> 📊 **Conclusion:** By waiting another 6 months, you save **$900** on taxes — that's 9% of your profit!

```
Rule of thumb:
┌──────────────────────────────────────────────────┐
│  If you can wait MORE than 1 year — wait!        │
│  Savings: from 7% to 22% of profit               │
└──────────────────────────────────────────────────┘
```

### Long-Term Capital Gains Tax Rates (2025-2026)

> ⚠️ **Important:** Long-term capital gains are taxed at **0%, 15%, or 20%** — depending on your taxable income. NOT everyone pays 15%!

| Status | 0% | 15% | 20% |
|--------|-----|-----|-----|
| **2025** | | | |
| Single | up to $48,350 | $48,351-$533,400 | above $533,400 |
| Married Filing Jointly | up to $96,700 | $96,701-$600,050 | above $600,050 |
| **2026** | | | |
| Single | up to $49,450 | $49,451-$545,500 | above $545,500 |
| Married Filing Jointly | up to $98,900 | $98,901-$613,700 | above $613,700 |

> ℹ️ The TCJA brackets were made permanent by the OBBBA (2025) — there was no sharp jump in rates in 2026. See the OBBBA section below.

> 💡 **Practical example:**
> - Income $35,000 (single) + profit $10,000 = **0% tax** on profit!
> - Income $100,000 (single) + profit $10,000 = **15% tax** = $1,500
> - Income $600,000 (single) + profit $10,000 = **20% tax** = $2,000

### Short-Term Capital Gains Tax Rates

Short-term gains (holding < 1 year) are taxed as **ordinary income** on a progressive scale:

| Rate | Single (2026) | Married Filing Jointly (2026) |
|------|---------------|-------------------------------|
| 10% | up to $12,400 | up to $24,800 |
| 12% | $12,401-$50,400 | $24,801-$100,800 |
| 22% | $50,401-$105,700 | $100,801-$211,400 |
| 24% | $105,701-$201,775 | $211,401-$403,550 |
| 32% | $201,776-$256,225 | $403,551-$512,450 |
| 35% | $256,226-$640,600 | $512,451-$768,700 |
| 37% | above $640,600 | above $768,700 |

> ⚠️ **The difference can be huge:** At income $150,000, a $10,000 short-term gain is taxed at **24%** = $2,400, while long-term is **15%** = $1,500. Savings of $900!

### 📜 One Big Beautiful Bill Act (OBBBA, 2025) — What Changed

> The law was signed in July 2025 and significantly affected personal
> taxation in the US. Key points for investors:

```
├── TCJA income tax rates made PERMANENT
│   └── The expected jump in rates in 2026 did NOT happen
├── Standard deduction raised and locked in
│   └── 2025: $15,750 (single) / $31,500 (MFJ); indexed thereafter
├── State tax deduction cap (SALT): $40,000 (2025), $40,400 (2026)
│   └── Cap & threshold both rise ~1%/yr through 2029, then revert to $10,000 (2030);
│       reduced above $505,000 MAGI (2026; $500k base, also +1%/yr)
├── New deduction for seniors 65+: up to $6,000 per person (2025-2028)
├── Estate tax exemption: $15M (2026), permanent + indexed
└── New savings accounts for children ("Trump Accounts")
```

> ⚠️ This is an educational overview, not tax advice. The details and
> thresholds are complex — verify current information on IRS.gov and
> consult a CPA.

### NIIT (Net Investment Income Tax)

An additional **3.8% tax** on investment income for high earners.

| Filing Status | MAGI Threshold |
|---------------|----------------|
| Single | > $200,000 |
| Married Filing Jointly | > $250,000 |
| Married Filing Separately | > $125,000 |

> ⚠️ **These thresholds are NOT adjusted for inflation.** They are fixed by
> statute and have not changed since 2013 — unlike the tax brackets and
> contribution limits, which rise every year. So more middle-income investors
> cross them over time. Do not assume these $200k/$250k/$125k figures rise with
> inflation like everything else on this page.

```
Example (Single, MAGI $220,000):
├── Excess over threshold: $20,000
├── Investment income: $30,000
├── NIIT base: min($20,000, $30,000) = $20,000
└── NIIT: $20,000 × 3.8% = $760

Total: 15% + 3.8% = 18.8% on long-term gains
```

> ⚠️ **The broker does not withhold NIIT — you self-assess it on Form 8960.**
> It appears on no 1099; you compute it on **Form 8960** and carry it to
> **Schedule 2 (Form 1040), Line 12**. Capital-loss carryforwards, investment
> expenses, and state taxes flow differently for NIIT than for regular tax.
> When 1099 income pushes MAGI over $200k/$250k, failing to report NIIT is a
> common under-reporting and audit trigger.

> 📖 Source: [IRS Topic 559](https://www.irs.gov/taxtopics/tc559)

### State Capital Gains Taxes

⚠️ **Federal rates aren't everything!** Most states tax capital gains additionally.

| State | Capital Gains | Notes |
|-------|---------------|-------|
| **CA** | up to 13.3% | Taxed as ordinary income |
| **NY** | up to 10.9% | Taxed as ordinary income |
| **NJ** | up to 10.75% | Taxed as ordinary income |
| **TX, FL, WA, NV** | 0% | No state income tax |

```
Example: $10,000 long-term gain, income $150K, CA resident

Federal:         15.0%  = $1,500
NIIT:             0.0%  = $0 (income < $200K)
State (CA, 9.3%): 9.3%  = $930
─────────────────────────────────
Total:           24.3%  = $2,430

vs TX resident: only $1,500 (saves $930!)
```

> 💡 **Tip:** Check your state's rates at [Tax Foundation](https://taxfoundation.org/data/all/state/state-income-tax-rates-2025/)

> ℹ️ **States tax more than capital gains.** States generally tax dividends and
> bond interest at the same rate as ordinary income. But two exceptions lower the
> bill:
> - **US government-bond interest is exempt from state tax.** Income from T-bills
>   and Treasury funds (VGSH, SGOV, BIL), as well as I-Bonds, is not subject to
>   state income tax (federal tax still applies). In a high-tax state (CA, NY) this
>   meaningfully lifts their after-tax yield versus corporate bonds and CDs.
> - **Municipal bonds: in-state vs out-of-state.** Muni interest is exempt from
>   federal tax, but from **your** state's tax usually only if the bond was issued
>   in that same state. Out-of-state munis are typically taxed by your state. So
>   residents of high-tax states sometimes choose in-state muni funds (e.g.
>   California funds for CA residents).

### Tax-Loss Harvesting (TLH)

Strategy to reduce taxes by realizing losses.

> ⚠️ **Important:** TLH only works in taxable (brokerage) accounts. In IRA/401(k) there's no point — losses don't provide tax benefits there!

```
How it works:
1. Sell a losing position
2. Loss reduces taxable gains
3. Can buy a similar (but not identical!) asset
4. Maintain market exposure, save on taxes
```

> 💡 **For TLH (and its mirror image — harvesting gains in the 0% bracket) to
> actually work, you need the Specific Identification lot method.** By default the
> broker sells FIFO — the oldest lot first — so you might accidentally sell a
> profitable lot instead of a losing one. Set "Specific ID" and name the exact
> lots when you sell; how to do it (and the deadline for choosing a lot) is covered
> in [Module 8](/investing-course/en/module-08-practice/).

### Rules for Using Losses

```
Order of applying losses:

1️⃣ First, losses offset GAINS (no limit)
   └── Short-term losses → short-term gains
   └── Long-term losses → long-term gains
   └── Then cross-apply

2️⃣ If losses EXCEED gains:
   └── Up to $3,000 per year deducted from ordinary income
   └── (For Married Filing Separately: $1,500)

3️⃣ Remainder carries forward INDEFINITELY
   └── Capital loss carryforward
```

### 💡 Tax-Loss Harvesting Calculation Examples

**Scenario 1: Losses less than gains**
```
├── Loss: -$5,000
├── Gain: +$10,000
├── Net gain: $5,000 ← taxed
└── Savings: $5,000 × 15% = $750
```

**Scenario 2: Losses exceed gains**
```
├── Loss: -$10,000
├── Gain: +$4,000
├── Net loss: $6,000
├── Deducted from ordinary income: $3,000 (limit!)
├── Carryforward to next year: $3,000
└── Savings this year: $3,000 × 24% = $720
```

**Scenario 3: No gains, only losses**
```
├── Loss: -$15,000
├── Gain: $0
├── Deducted from ordinary income: $3,000 (limit!)
├── Carryforward to next year: $12,000
├── Savings this year: $3,000 × 24% = $720
└── Those $12,000 can be used in future years
```

> 💡 **Practical tip:** Even without gains, it makes sense to realize losses — they accumulate and can be used in future years with no time limit.

### Wash Sale Rule — Detailed Explanation

> ⚠️ **Critically important to understand this rule, otherwise you'll lose the tax benefit!**

```
Wash Sale = prohibition on "fictitious" loss sale

61-day window:
├── 30 days BEFORE sale
├── Sale day
└── 30 days AFTER sale

Cannot buy:
├── The same security
├── "Substantially identical" security
│   ├── Same ETF from different provider (VOO ≈ SPY — debatable!)
│   ├── Options on the same stock
│   └── Mutual fund of the same index
└── Convertible bonds of the same company
```

> ⚠️ **Turn off automatic dividend reinvestment (DRIP).** A reinvested dividend
> is a purchase. If it lands inside the 61-day window on the same or a
> "substantially identical" fund, it triggers a wash sale even though you never
> manually re-bought. Switch DRIP off on the harvested fund during the window.

> ⚠️ **The broker only catches wash sales within a single account.** It reports
> a disallowed loss in **1099-B, Box 1g**, but **only per-account**. A wash sale
> spanning two different accounts, your IRA, or a spouse's account is NOT seen
> by the broker and won't appear on the 1099-B — you must identify it yourself
> and enter the adjustment on **Form 8949**. This is exactly where audit
> adjustments arise.

### ⚠️ IRA Trap — CRITICALLY IMPORTANT!

```
Wash Sale applies to ALL your accounts:
├── All your brokerage accounts
├── Spouse's accounts
├── Your IRA and 401(k) ← TRAP!
└── Even accounts of your companies (if you're a controlling person)

DANGEROUS SCENARIO:
├── Sold VTI at $5,000 loss on taxable account
├── Same day bought VTI in Roth IRA
├── Result: Wash Sale!
│   ├── $5,000 loss NOT counted
│   └── And it CANNOT be added to IRA basis!
└── Loss LOST FOREVER
```

### What Happens When Violating Wash Sale?

| Where Bought | What Happens to Loss |
|--------------|----------------------|
| **On taxable account** | Loss added to new shares' basis (deferred, not lost) |
| **On IRA/401(k)** | Loss **LOST FOREVER** |
| **Spouse bought** | Loss deferred or lost (depends on account) |

### Safe Alternatives

**Option 1:** Wait 31+ days
```
Day 1: Sold VTI at a loss
Day 32: Can buy VTI back
Loss counted ✅
```

**Option 2:** Buy similar but NOT identical ETF

| Selling | Buying | Index | Safe? |
|---------|--------|-------|-------|
| VTI | ITOT or SWTSX | US Total Market | ✅ Yes |
| VOO | IVV* | S&P 500 | ⚠️ Debatable |
| VOO | VTI | Total Market | ✅ Yes (different index) |
| VEA | IEFA or SCHF | Developed Int'l | ✅ Yes |
| VWO | IEMG or SCHE | Emerging Markets | ✅ Yes |
| BND | AGG or SCHZ | US Bonds | ✅ Yes |
| VXUS | IXUS or SPDW | Int'l ex-US | ✅ Yes |

*VOO and IVV both track S&P 500 — IRS may consider them "substantially identical." Safer to use VTI (Total Market) as a substitute.

> 💡 **Best practice:** After 31 days, you can return to the original ETF if you want.

---

## Taxation for Non-US Residents

> 📖 **Detailed section for non-residents:** [NON-RESIDENTS](/investing-course/en/NON-RESIDENTS/) — detailed instructions on brokers, W-8BEN, tax treaties, and Irish ETFs.

### Form W-8BEN

```
What it is:
├── Declaration of foreign status
├── Application for tax treaty benefits
└── Valid for 3 years

What it provides:
├── Reduced dividend tax
├── From 30% to 10-15% (depends on country)
└── NRA capital gains are already not US-taxed by statute
    (this follows from the law, NOT from the W-8BEN form itself)
```

### Taxes for Non-Residents

```
Dividends:
├── Standard rate (no treaty): 30%
├── Under a tax treaty (W-8BEN): usually 0%, 10%, or 15%
│   └── The exact rate depends on the country — check the treaty
└── Withheld by broker automatically

Capital Gains:
├── Usually NOT taxed in USA
├── But taxed in country of residence
└── Check your country's tax treaty

Bond Interest:
├── Treasury bonds — usually 0%
└── Corporate — may be taxed
```

### Tax Planning for Non-Residents

```
Recommendations:
├── Complete W-8BEN immediately when opening account
├── Reduce dividend withholding STRUCTURALLY, not by stock-picking:
│   ├── accumulating (acc) UCITS ETFs reinvest dividends internally
│   └── or broad funds with a naturally lower dividend yield
├── Consult with a tax professional
└── Account for taxes in country of residence
```

> ℹ️ The goal is to cut the dividend-withholding drag, NOT to pick individual
> stocks. Use the passive-investor tool — accumulating-vs-distributing ETFs —
> rather than selecting single names.

---

## Tax Forms and Reporting

### Tax Forms for Investors (US Residents)

> 💡 **Important:** The broker sends a copy of all 1099 forms to the IRS. You MUST report all income — IRS expects to see it in your tax return!

| Form | What It Shows | Where It Goes | When Received |
|------|---------------|---------------|---------------|
| **1099-DIV** | Dividends | Schedule B (Line 5) | By mid-February |
| **1099-INT** | Interest (bonds, cash) | Schedule B (Line 1) | By mid-February |
| **1099-B** | Securities sales | Form 8949 → Schedule D | By mid-February |
| **1099-R** | IRA/401(k) distributions | Form 1040 (Line 4/5) | By end of January |
| **1099-MISC** | Other income (broker bonuses) | Schedule 1 | By end of January |

### Details on Each Form

**Form 1099-DIV — Dividends**
```
Box 1a: Ordinary Dividends (total amount)
Box 1b: Qualified Dividends (taxed at preferential rate)
Box 2a: Capital Gain Distributions (from funds)
Box 4: Federal Tax Withheld
Box 7: Foreign Tax Paid (can be credited!)
```

> 💡 **Box 2a and "phantom" capital-gain distributions — why ETFs beat mutual
> funds.** A fund must distribute the capital gains it realizes internally to its
> holders every year, and you pay tax on that amount (Box 2a) **even if you sold
> nothing yourself, and even if the share price fell that year.** Mutual funds are
> especially exposed: when other investors head for the exit, the manager has to
> sell holdings, and the taxable gain is spread across everyone who stayed.
>
> ETFs almost always avoid this thanks to the in-kind creation/redemption
> mechanism: swapping baskets of securities with authorized participants isn't a
> taxable event. So a broad index ETF (VOO, VTI) typically goes years without a
> Box 2a distribution, while a comparable mutual fund may hand you one. This is one
> reason to hold the least tax-efficient funds in an IRA and ETFs in taxable (see
> asset location).
>
> ⚠️ **The "buying a dividend" trap.** Don't buy a fund (especially a mutual fund)
> right before its year-end distribution: you'll receive a taxable payout you
> didn't actually earn — the share price drops by exactly its amount. Check the
> distribution (record) date before a large purchase in November–December.

> 💡 **Foreign Tax Credit (FTC) — how to claim the foreign tax in Box 7.**
> This matters for anyone holding international funds (VXUS, VEA, VWO).
> - **Claimed as a credit on Schedule 3 (Form 1040), Part I, line 1.** The
>   foreign tax is generally claimed on **Form 1116**, which carries to
>   Schedule 3.
> - **De minimis exception:** if your total creditable foreign tax is
>   ≤ **$300** (single) / **$600** (MFJ), all foreign-source income is
>   passive-category (fund dividends meet this), and all of it was reported on a
>   1099-DIV/1099-INT, you may claim the credit **directly on Schedule 3 with no
>   Form 1116** (electing this forfeits the FTC carryback/carryforward).
> - **Credit vs deduction:** you pick one or the other for all foreign taxes
>   that year. The **credit is almost always better** (dollar-for-dollar vs.
>   merely reducing taxable income; the deduction also requires itemizing).
> - **The FTC is lost inside an IRA/401(k):** foreign tax on income in a
>   retirement account can be neither credited nor deducted — a reason to hold
>   international funds in a **taxable** account.
>
> ⚠️ Educational background, not tax advice — verify the details on IRS.gov.

**Form 1099-B — Sales**
```
For each transaction:
├── Date acquired
├── Date sold
├── Proceeds
├── Cost basis
├── Gain or Loss
└── Short-term or Long-term
```

**Form 1099-R — Retirement Distributions**
```
Box 1: Gross Distribution (total amount)
Box 2a: Taxable Amount
Box 4: Federal Tax Withheld
Box 7: Distribution Code (type of distribution)
   ├── Code 1: Early distribution (10% penalty)
   ├── Code 2: Early, exception applies (no penalty)
   ├── Code 7: Normal distribution (59½+)
   └── Code G: Rollover (no tax)
```

> ⚠️ **Code 1 but a penalty exception applies? File Form 5329.** If Box 7 shows
> Code 1 but an exception from the account-types table (Module 4) applies to you, the 10%
> penalty is **not waived automatically** — you must claim it on **Form 5329**.
> Without it, the IRS will assess the 10% based on the 1099-R code. Conversely,
> claiming an exception the code doesn't support is a known audit flag.

### Typical Broker Consolidated Statement

```
Usually the broker (Fidelity, Schwab, etc.) sends
ONE consolidated PDF containing:
├── 1099-DIV (pages 1-2)
├── 1099-INT (page 3)
├── 1099-B (pages 4-20+)
└── Summary for tax return

Check ALL sections before filing your return!
```

### Main Tax Return Forms

```
Form 8949:
├── Detail of EACH sale
├── Part I: Short-term (< 1 year)
├── Part II: Long-term (> 1 year)
└── Totals transfer to Schedule D

Schedule D:
├── Summary of all capital gains/losses
├── Calculation of final tax
└── Part of your Form 1040

Schedule B:
├── Interest > $1,500
├── Dividends > $1,500
└── If less — just on Form 1040
```

### Compliance Forms YOU File

> 💡 **Important:** Broker 1099s report income, but the strategies this module
> teaches (backdoor Roth, HSA, NIIT, FTC, gifting) require their own forms that
> the broker does NOT file for you. Each form maps to a topic in this module.

| Form | What It Covers | When Needed |
|------|----------------|-------------|
| **Form 8606** | Nondeductible IRA contributions, basis, backdoor Roth (Part I + II) | Account Types (Module 4) |
| **Form 5329** | 10% early-withdrawal penalty; 25%/10% RMD excise tax (Part IX) | Account Types (Module 4) |
| **Form 8889** | HSA contributions and distributions | HSA (Module 4) |
| **Form 8960** | NIIT 3.8% → Schedule 2, Line 12 | Investment income (above) |
| **Form 1116** | Foreign Tax Credit (if foreign tax > $300 single / $600 MFJ) | Dividends / Box 7 (above) |
| **Form 709** | Gifts over $19,000/yr / 5-year 529 superfunding | 529 (Module 4) |

> ℹ️ **Form 5498** is issued by your broker/custodian (usually in May): it
> confirms IRA contributions, account FMV, and RMDs. You don't file it — it's
> for reconciliation.

> ⚠️ Educational background, not tax advice — verify forms and thresholds on
> IRS.gov.

> 💡 **Practical tip:** Most tax software (TurboTax, H&R Block) imports 1099 automatically. Just enter your broker login, and data loads itself.

### Reporting for Non-Residents

```
What you need:
├── W-8BEN (complete with broker)
├── Broker income report
├── Tax return in country of residence
└── Proof of taxes paid (for credit)
```

---

## Quarterly Estimated Taxes and the Safe Harbor

> ⚠️ **On a US resident's taxable account, the broker does not withhold tax on
> your dividends, interest, or capital gains** — unlike an employer, who withholds
> tax from your paycheck. (This is about US residents/citizens filing a 1040;
> non-residents are different — their US dividends ARE withheld at source, see the
> W-8BEN section above.) If you paid nothing in during the year on your investment
> income, the IRS can charge an **underpayment penalty** — even if you settle up in
> full by April 15. This is the most common way a passive investor who realized a
> large gain or did a Roth conversion ends up with an actual penalty.

**Who this affects.** If you expect to owe **$1,000 or more** for the year beyond
what's already been withheld, the IRS expects estimated payments during the year,
not a single payment in April.

### The "safe harbor" — how to avoid the penalty for certain

There is no penalty if your payments for the year (withholding + estimates) are at
least the **lesser of** 90% of the current year's tax or 100% (110%) of the prior
year's tax:

| Benchmark | Value |
|-----------|-------|
| 90% of the **current** year's tax | most accurate, but needs an income forecast |
| 100% of the **prior** year's tax | simpler: just take last year's tax amount |
| 110% of the prior year's tax | if last year's AGI was **> $150,000** ($75,000 for MFS) |

> 💡 The prior-year benchmark is the easiest: take the total-tax line from last
> year's return — **100% of it, or 110% if last year's AGI was over $150,000
> ($75,000 MFS)** — divide by 4, and pay it in equal installments. Then no matter
> how much your income grows this year, there's no underpayment penalty (you still
> owe the actual tax on the gain by April 15). Paying only 100% when you were over
> the AGI threshold is a common way high earners still get penalized.

### Estimated-payment due dates

```
For the period    Deadline
├── Q1 (Jan–Mar)   April 15
├── Q2 (Apr–May)   June 15
├── Q3 (Jun–Aug)   September 15
└── Q4 (Sep–Dec)   January 15 of the next year
```

You pay via **Form 1040-ES** (or online — IRS Direct Pay / EFTPS). The
underpayment penalty is computed on **Form 2210**.

### Two nuances that save money

- **Uneven income — the annualized-installment method.** If a large gain arrived
  late in the year (you sold in December), you don't have to back-pay estimates
  for the earlier quarters. The annualized-installment method (Form 2210,
  Schedule AI) ties the required payment to the quarter in which the income
  actually occurred.
- **Withholding is spread over the whole year.** Unlike estimates, any
  **withholding** is treated by the IRS as paid evenly across the year — no matter
  when it actually happened. So a big Q4 gain can be covered by increasing your
  W-4 withholding at work late in the year, or by taking an IRA distribution with
  withholding — and there's no penalty even if you paid no estimates.

> ⚠️ This is an educational overview, not tax advice. Verify the exact thresholds
> and rules on IRS.gov (Form 1040-ES, Form 2210) or with a CPA.

---

## Practical Assignment

1. **Calculate** tax on $10,000 in dividends:
   - As US resident (15% rate) = $1,500
   - As non-resident with W-8BEN (treaty rate, e.g. 15%) = $1,500
   - As non-resident without W-8BEN (30%) = $3,000

2. **Find information** about the tax treaty between the USA and your country.

---

## Key Takeaways

- Long-term investments (>1 year) are taxed at lower rates (0/15/20%)
- Qualified dividends are taxed as long-term capital gains
- Non-residents must complete Form W-8BEN (30% → treaty rate, often ~15%)
- Tax-loss harvesting helps optimize taxes (mind the Wash Sale Rule)
- Key forms: 1099 (residents), 1042-S (non-residents), W-8BEN

---

## Self-Check Test

<div id="ic-quiz-root"></div>

<script type="application/json" id="ic-quiz-data">
{
  "questions": [
    {
      "q": "What is Form W-8BEN?",
      "options": ["A declaration of foreign status that reduces dividend tax from 30% to the treaty rate (often ~15%)", "A form for reporting securities sales", "An application to open an IRA retirement account", "The brokerage's annual tax report"],
      "correct": 0,
      "explain": "W-8BEN certifies foreign status and reduces dividend tax from 30% to the treaty rate (around 15% for most countries with a treaty)."
    },
    {
      "q": "What is the Long-Term Capital Gains tax rate for most investors?",
      "options": ["0%", "10%", "15%", "25%"],
      "correct": 2,
      "explain": "For most investors the long-term capital gains rate is 15%."
    },
    {
      "q": "What is the Wash Sale rule that applies to Tax-Loss Harvesting?",
      "options": ["You cannot sell assets more than once a year", "You cannot buy a substantially identical asset 30 days before or after the sale", "Losses cannot be carried to the next year", "Tax is due immediately on any sale"],
      "correct": 1,
      "explain": "The Wash Sale Rule prohibits buying a substantially identical asset within 30 days before or after selling at a loss."
    }
  ]
}
</script>

<details>
<summary markdown="span"><b>Question 1:</b> What is Form W-8BEN and why do non-residents need it?</summary>

**Answer:** W-8BEN is a declaration of foreign status that reduces dividend tax from 30% to the applicable treaty rate (often ~15%, but it varies by country — 0/10/15% or no reduction without a treaty). Valid for 3 years.

</details>

<details>
<summary markdown="span"><b>Question 2:</b> What is the Long-Term Capital Gains tax rate for most investors?</summary>

**Answer:** 15% (for income from ~$49,000 to ~$545,000 for single filers, 2026). Long-term means holding the asset for more than 1 year.

</details>

<details>
<summary markdown="span"><b>Question 3:</b> What is Tax-Loss Harvesting?</summary>

**Answer:** A strategy of selling losing positions to reduce taxable gains. Important: cannot buy a "substantially identical" asset 30 days before or after the sale (Wash Sale Rule).

</details>

**Results:**
- 3 correct: Excellent! Move on to Module 5
- 2 correct: Re-read the tax sections
- 0-1 correct: We recommend going through this part again

---

## 📚 Additional Reading

### Official IRS Resources

- [IRS Publication 550](https://www.irs.gov/publications/p550) — taxation of investment income
- [IRS Publication 590-A](https://www.irs.gov/publications/p590a) — contributions to IRAs
- [IRS Publication 590-B](https://www.irs.gov/publications/p590b) — distributions from IRAs

### Tax Resources

- [Investopedia: Capital Gains Tax](https://www.investopedia.com/terms/c/capital_gains_tax.asp) — capital gains tax explained
- [Investopedia: Wash Sale Rule](https://www.investopedia.com/terms/w/washsalerule.asp) — wash sale rule
- [TurboTax Investment Guide](https://turbotax.intuit.com/tax-tips/investments-and-taxes) — investment tax guide

---

[← Module 4: Brokers & Accounts](/investing-course/en/module-04-brokers-taxes/) | [Module 5 →](/investing-course/en/module-05-strategies/) · [📖 Glossary](/investing-course/en/GLOSSARY/)
