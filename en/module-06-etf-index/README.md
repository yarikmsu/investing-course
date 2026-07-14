---
layout: default
title: "Module 6: ETFs"
parent: "Course Modules"
nav_order: 7
description: "All about ETFs: VOO, VTI, QQQ, SPY. Model portfolios"
permalink: /module-06-etf-index/
---

# Module 6: ETFs and Index Funds

> **IMPORTANT: This is educational material, not financial advice.**
>
> **Investing involves risks. You can lose some or ALL of your invested money.**
>
> - S&P 500 dropped 57% (2008-2009), 34% (2020), 25% (2022)
> - Past results DO NOT guarantee future performance
> - Consult with a licensed financial professional (CFA/CFP) before investing

---

## What You'll Learn

| | |
|---|---|
| **Level** | Intermediate |
| **Time** | ~40 minutes |
| **Prerequisites** | [Module 5](/investing-course/en/module-05-strategies/) |

After completing this module, you'll be able to:
- Deeply understand how ETFs work
- Select ETFs by key criteria (ER, AUM, tracking)
- Compare popular ETFs (VOO, VTI, QQQ, VT)
- Build model portfolios from 2-4 ETFs
- Understand when and how to rebalance

---

## Lesson 6.1: Deep Dive into ETFs

### How an ETF Works

```
ETF Structure:
┌─────────────────────────────────────────────┐
│                    ETF                       │
│  ┌─────────┬─────────┬─────────┬─────────┐  │
│  │  AAPL   │  MSFT   │  GOOGL  │  AMZN   │  │
│  │  7.2%   │  6.5%   │  4.1%   │  3.2%   │  │
│  └─────────┴─────────┴─────────┴─────────┘  │
│  ┌─────────┬─────────┬─────────┬─────────┐  │
│  │  NVDA   │  META   │  TSLA   │  ...    │  │
│  │  3.0%   │  2.5%   │  1.8%   │  72%    │  │
│  └─────────┴─────────┴─────────┴─────────┘  │
└─────────────────────────────────────────────┘
          │
          ▼
   1 ETF share = ownership in all companies
```

### Creation/Redemption Mechanism

```
ETF Uniqueness:

Authorized Participants (AP):
├── Large institutional investors
├── Can create and redeem ETF shares
└── Keep price close to NAV

Creation Process:
1. AP buys basket of stocks
2. Transfers it to ETF provider
3. Receives new ETF shares
4. Sells them on exchange

This ensures:
├── Accurate index tracking
├── Low spreads
├── Tax efficiency
└── High liquidity
```

### NAV and Market Price

```
NAV (Net Asset Value):
├── True value of fund assets
├── Calculated daily
└── = (Asset Value - Liabilities) / Shares

Market Price:
├── Price on exchange
├── Can differ from NAV
└── Premium (above NAV) / Discount (below NAV)

For large ETFs (VOO, SPY):
└── Difference usually <0.05%

For niche ETFs:
└── Difference can be significant
```

---

## Lesson 6.2: Best ETFs by Category

### Broad US Market

| Ticker | Provider | Expense Ratio | Description |
|--------|----------|---------------|-------------|
| VTI | Vanguard | 0.03% | Entire US market (~3,500 stocks) |
| ITOT | iShares | 0.03% | Entire US market |
| SPTM | SPDR | 0.03% | Entire US market |

> ℹ️ AUM (assets under management) for every fund listed here is far above the >$1B reliability threshold. Exact figures go stale quickly — verify current values on [etf.com](https://www.etf.com) when needed.

### S&P 500

| Ticker | Provider | Expense Ratio | 10yr Return* | 20yr Return* |
|--------|----------|---------------|--------------|--------------|
| VOO | Vanguard | 0.03% | ~12.5%/yr | ~10.5%/yr |
| SPY | SPDR | 0.09% | ~12.5%/yr | ~10.5%/yr |
| IVV | iShares | 0.03% | ~12.5%/yr | ~10.5%/yr |

*Historical average annual return of the S&P 500 (with dividend reinvestment), shown for illustration. These are past results, not expected future returns. All three funds track the same index, so their returns are virtually identical. Figures are approximate (as of early 2025) — verify current values.

### NASDAQ-100

| Ticker | Provider | Expense Ratio | Description |
|--------|----------|---------------|-------------|
| QQQ | Invesco | 0.20% | Original NASDAQ-100 |
| QQQM | Invesco | 0.15% | Mini version, cheaper |

### International

| Ticker | Provider | Expense Ratio | Description |
|--------|----------|---------------|-------------|
| VXUS | Vanguard | 0.05% | Entire world ex-US |
| VEA | Vanguard | 0.03% | Developed markets ex-US |
| VWO | Vanguard | 0.06% | Emerging markets |
| VT | Vanguard | 0.06% | Entire world including US |
| IEFA | iShares | 0.07% | Developed markets ex-US |
| IEMG | iShares | 0.09% | Emerging markets |

### Bonds

| Ticker | Provider | Expense Ratio | Description |
|--------|----------|---------------|-------------|
| BND | Vanguard | 0.03% | All US bonds |
| AGG | iShares | 0.03% | All US bonds |
| BNDX | Vanguard | 0.07% | International bonds |
| TIP | iShares | 0.19% | Inflation-protected |
| SHY | iShares | 0.15% | Short Treasury (1-3 yr) |
| TLT | iShares | 0.15% | Long Treasury (20+ yr) |

### Sector

| Ticker | Sector | Expense Ratio |
|--------|--------|---------------|
| XLK | Technology | 0.10% |
| XLF | Financials | 0.10% |
| XLV | Healthcare | 0.10% |
| XLE | Energy | 0.10% |
| XLY | Consumer Discretionary | 0.10% |
| XLRE | Real Estate | 0.10% |
| XLI | Industrials | 0.10% |
| XLC | Communications | 0.10% |
| XLU | Utilities | 0.10% |
| XLP | Consumer Staples | 0.10% |
| XLB | Materials | 0.10% |

---

## Lesson 6.3: How to Choose an ETF

### Selection Checklist

```
1. Expense Ratio
   ├── Lower is better
   ├── For index ETFs: <0.10%
   └── 0.5% difference over 30 years = tens of thousands of dollars

2. AUM (Assets Under Management)
   ├── Larger = better liquidity
   ├── Minimum: $100M
   └── Preferred: >$1B

3. Tracking Error
   ├── How closely it follows the index
   └── Smaller = better

4. Bid-Ask Spread
   ├── Difference between buy and sell price
   ├── Narrow spread = low transaction costs
   └── For popular ETFs: <$0.05

5. Provider
   ├── Vanguard, iShares, SPDR — reliable
   └── Reputation and track record matter

6. Tax Efficiency
   ├── ETFs usually more efficient than mutual funds
   └── Consider distributions
```

### 💰 Calculator: How Fees Eat Returns

Investing **$10,000** for 30 years at 7% annual return:

| Expense Ratio | Total | Fees over 30 years | You Lost |
|---------------|-------|-------------------|----------|
| 0.03% (VOO) | **$75,500** | ~$700 | — |
| 0.20% (QQQ) | $72,000 | ~$4,100 | $3,500 |
| 0.50% (active fund) | $66,100 | ~$10,000 | $9,400 |
| 1.00% (expensive fund) | **$57,400** | ~$18,700 | **$18,100** |

```
Formula: FV = PV × (1 + r - ER)^n

Where:
├── PV = initial amount ($10,000)
├── r = return (7%)
├── ER = expense ratio
└── n = number of years (30)
```

> 📊 **Conclusion:** The difference between 0.03% and 1.00% fees = **$18,100** in losses per $10,000!
> On $100,000 that's **$181,000** — the cost of a nice car or a house down payment.

### 📈 Active vs Passive Funds: Statistics

According to [SPIVA (S&P Indices Versus Active)](https://www.spglobal.com/spdji/en/research-insights/spiva/) report:

| Period | % of active funds that underperformed S&P 500 |
|--------|-----------------------------------------------|
| 1 year | ~60% |
| 5 years | ~75% |
| 10 years | ~85% |
| 15 years | **~90%** |
| 20 years | **~95%** |

```
Why this happens:
├── High fees (1-2% vs 0.03%)
├── Trading costs (frequent transactions)
├── Tax inefficiency
├── Difficulty consistently beating the market
└── Survivorship bias (failed funds close)
```

> 💡 **Practical takeaway:** By buying a simple index ETF for 0.03%, you automatically beat 90%+ of professional managers over a 15+ year horizon.

### Comparing Similar ETFs

```
Example: S&P 500 ETFs

          VOO        SPY        IVV
Expense:  0.03%      0.09%      0.03%
AUM:      all >$1B (mega-funds, verify on etf.com)
Spread:   $0.01      $0.01      $0.01
Provider: Vanguard   SPDR       iShares

Recommendation:
├── Long-term investing: VOO or IVV
├── Options trading: SPY (best liquidity)
└── Difference is minimal, pick any
```

---

## Lesson 6.4: Model ETF Portfolios

### Simple Portfolio (2 ETFs)

```
"Lazy Portfolio":
├── VTI (US Stocks): 80%
└── BND (US Bonds): 20%

For whom:
├── Beginning investors
├── Long-term goals
└── Minimal maintenance

Variation for young investors (100% stocks):
└── VTI: 100%
```

### Classic Three-Fund Portfolio

```
"Three-Fund Portfolio" (Bogleheads):
├── VTI (US Stocks): 60%
├── VXUS (International Stocks): 20%
└── BND (Bonds): 20%

Advantages:
├── Global diversification
├── Simplicity
├── Low fees
└── Set it and forget it
```

> ⚠️ **This is a US tilt, not a neutral default.** By market capitalization, roughly
> 40% of global stocks are outside the US (that's how much ex-US sits in VT). In this
> portfolio ex-US = VXUS 20% out of 80% in stocks, i.e. only ~25% of equities ex-US —
> well below the market-cap weight. That's a legitimate, deliberate home-country tilt,
> but it's a bet on continued US leadership, not a "market-neutral" middle. To be
> market-cap-neutral, hold ~40% of your equities outside the US (or simply hold VT).

### Four-Fund Portfolio

```
Adding international bonds:
├── VTI (US Stocks): 50%
├── VXUS (International Stocks): 20%
├── BND (US Bonds): 20%
└── BNDX (International Bonds): 10%
```

### All-Weather Portfolio (Ray Dalio)

```
For all economic conditions:
├── Long-term bonds: 40% (TLT)
├── US Stocks: 30% (VTI)
├── Intermediate bonds: 15% (IEF)
├── Gold: 7.5% (GLD)
└── Commodities: 7.5% (DBC)

Goal: stability in any conditions
Downside: may lag stocks in bull markets
```

### Aggressive Growth (for young investors)

```
100% stocks, maximum growth (broad market):
├── VTI (US Stocks): 60%
├── VWO (Emerging Markets): 25%
└── VEA (Developed Markets): 15%

⚠️ High volatility!
Only for long-term horizon (15+ years)
```

> ⚠️ **"Aggressive" in the passive sense means more stocks and fewer bonds — not a bet
> on one sector.** If you want it even simpler: 100% VTI + VXUS. Adding VGT (technology)
> or any other sector fund is an **optional, speculative tilt**, not part of the core
> portfolio: it concentrates risk in a single sector, which this course warns against
> (see the QQQ / NASDAQ-100 concentration warning in [ETF-ANALYSIS](/investing-course/en/ETF-ANALYSIS/)). If you do add such a tilt, keep it small (e.g. ≤10%) and
> understand that it's a bet, not a "neutral" aggressive portfolio.

### Dividend Portfolio

```
Focus on passive income:
├── SCHD (US Dividend): 40%
├── VYM (High Dividend): 30%
├── VIGI (International Dividend): 20%
└── VNQ (REITs): 10%

Expected yield: 3-4%
```

---

## Lesson 6.5: Portfolio Rebalancing

### Why Rebalancing is Needed

```
Example:
Initial allocation: 80/20 (stocks/bonds)

After one year (stocks up 25%):
├── Stocks: $100k × 0.80 × 1.25 = $100k → 87%
└── Bonds: $100k × 0.20 × 1.02 = $20.4k → 13%

New allocation: 87/13

Problem: risk is higher than planned!
Solution: sell stocks, buy bonds
```

### Rebalancing Methods

| Method | How It Works | Pros | Cons |
|--------|--------------|------|------|
| 📅 **Calendar-based** | Annually or quarterly | Simple, predictable | May miss large deviations |
| 📊 **Threshold (5%)** | When deviation >5% | Precise risk control | Requires monitoring |
| 🔄 **Hybrid** | Quarterly check + rebalance if >5% | Optimal balance | Harder to automate |
| 💰 **Via contributions** | New money to underweight | Tax-efficient | Requires regular deposits |

### Tax Considerations

```
In taxable account:
├── Selling creates taxable event
├── Use tax-advantaged accounts for rebalancing
├── Direct new money to underweight
└── Combine with tax-loss harvesting

In IRA/401(k):
├── No tax consequences
└── Rebalance freely
```

---

## Lesson 6.6: Asset Allocation by Age

### "110 Minus Age" Rule

```
% stocks = 110 - Your age

Examples:
├── 25 years: 110 - 25 = 85% stocks
├── 40 years: 110 - 40 = 70% stocks
├── 55 years: 110 - 55 = 55% stocks
└── 70 years: 110 - 70 = 40% stocks

Remainder in bonds

⚠️ This is a simplified rule!
Consider your personal situation.
```

### Allocation Factors

| Factor | 🔼 More Stocks | 🔽 More Bonds |
|--------|----------------|---------------|
| **Horizon** | Long (20+ years) | Short (<10 years) |
| **Income** | Stable | Unstable |
| **Risk tolerance** | High | Low |
| **Retirement** | Secured (SS, pension) | Depends on portfolio |
| **Need capital soon?** | No | Yes (house, education) |

### Glide Path

```
Life cycle example:

Age 25: ████████████████████░░░░ 90% stocks
Age 35: ███████████████████░░░░░ 80% stocks
Age 45: ██████████████████░░░░░░ 70% stocks
Age 55: █████████████████░░░░░░░ 60% stocks
Age 65: ██████████████░░░░░░░░░░ 50% stocks
Age 75: ████████████░░░░░░░░░░░░ 40% stocks
```

---

## Practical Assignment

1. **Create your portfolio**:
   - Determine your age and risk tolerance
   - Choose stock/bond allocation
   - Select 2-4 ETFs to implement

2. **Compare ETFs**:
   - Find expense ratios for VTI, VOO, QQQ
   - Calculate fee difference over 30 years on $100,000

3. **Create a rebalancing plan**:
   - How often will you rebalance?
   - What deviation threshold will you set?

4. **Calculate**:
   - How many ETF shares can you buy with $5,000?
   - What will be the dividend yield?

---

## Additional Reading

| Resource | Description |
|----------|-------------|
| [ETF.com](https://www.etf.com/) | ETF analytics and screener |
| [Portfolio Visualizer](https://www.portfoliovisualizer.com/) | Portfolio backtesting and analysis |
| [Bogleheads: Three-Fund Portfolio](https://www.bogleheads.org/wiki/Three-fund_portfolio) | Classic three-fund portfolio |
| "The Bogleheads' Guide to Investing" — Larimore, Lindauer, LeBoeuf | Complete passive investing guide |

---

## Key Takeaways

- ETFs are the best instrument for most investors
- Expense ratio is critical for long-term returns
- 2-4 ETFs are enough for a complete portfolio
- Rebalancing maintains target risk level
- Asset allocation is the main return driver

---

## Self-Check Test

<details>
<summary markdown="span"><b>Question 1:</b> What is NAV and why might an ETF's price differ from it?</summary>

**Answer:** NAV (Net Asset Value) is the true value of the fund's assets. Market price can trade at a premium (above NAV) or discount (below NAV). For large ETFs, the difference is usually <0.05%.

</details>

<details>
<summary markdown="span"><b>Question 2:</b> What ETFs make up the classic Bogleheads three-fund portfolio?</summary>

**Answer:**
- VTI (US Stocks): 60%
- VXUS (International Stocks): 20%
- BND (Bonds): 20%

</details>

<details>
<summary markdown="span"><b>Question 3:</b> What rule helps determine stock allocation in a portfolio by age?</summary>

**Answer:** "110 minus age" = percentage in stocks. For example, at 30 years old: 110 - 30 = 80% stocks, 20% bonds.

</details>

<details>
<summary markdown="span"><b>Question 4:</b> When should you rebalance your portfolio?</summary>

**Answer:** When deviation from target allocation exceeds 5%, or once a year. Also when there are significant changes in life situation.

</details>

<details>
<summary markdown="span"><b>Question 5:</b> How does VOO differ from SPY?</summary>

**Answer:** Both track the S&P 500, but VOO has an expense ratio of 0.03% (vs 0.09% for SPY). SPY has better liquidity for options trading. For long-term investing, VOO is more cost-effective.

</details>

<details>
<summary markdown="span"><b>Question 6:</b> What determines ~90% of a portfolio's return variability over time according to research?</summary>

**Answer:** Asset Allocation explains ~90% of the **variability (variance) of portfolio returns** over time — NOT 90% of the return *level* (a common misreading). Market timing and stock selection explain the rest. See Module 7 (Lesson 7.3) for the detail and caveat.

</details>

**Results:**
- 5-6 correct: Excellent! Move on to Module 7
- 3-4 correct: Re-read sections on portfolios and rebalancing
- 0-2 correct: We recommend going through the module again

---

[← Module 5](/investing-course/en/module-05-strategies/) | [Module 7 →](/investing-course/en/module-07-risk-psychology/)
