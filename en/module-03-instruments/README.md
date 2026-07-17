---
layout: default
title: "Module 3: Instruments"
last_reviewed: 2026-07-15
parent: "Course Modules"
nav_order: 4
description: "Stocks, bonds, ETFs, REITs"
permalink: /module-03-instruments/
---

# Module 3: Investment Instruments

{% include reviewed.html %}

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
| **Prerequisites** | [Module 2](/investing-course/en/module-02-stock-market/) |

After completing this module, you'll be able to:
- Understand the difference between stocks and bonds
- Know what ETFs are and why they're popular
- Distinguish fund types (index, active, mutual)
- Understand REITs and their role in a portfolio
- Know the basics of options (for advanced investors)

---

## Lesson 3.1: Stocks

> 📖 This module's terms (ETF, expense ratio, duration, REIT, and more) are collected in the [Glossary](/investing-course/en/GLOSSARY/) — handy to keep open in a tab.

### What is a Stock?

A stock is a security that represents ownership in a company.

```
When you buy a stock, you get:
├── Right to a share of profits (dividends)
├── Voting rights at shareholder meetings
├── Right to a share of assets in liquidation
└── Opportunity to profit from price appreciation
```

### Types of Stocks

| Feature | Common Stock | Preferred Stock |
|---------|--------------|-----------------|
| **Voting rights** | ✅ Yes | ❌ Usually no |
| **Dividends** | Not guaranteed | Fixed |
| **Payment priority** | After preferred | First |
| **Growth potential** | 🔼 High | 🔽 Lower |
| **Volatility** | High | Low |

### Stock Classes

Some companies have different share classes:

| Company | Class A | Class B | Class C |
|---------|---------|---------|---------|
| Alphabet | GOOGL (voting) | — | GOOG (non-voting) |
| Berkshire | BRK.A (~$715k) | BRK.B (~$475) | — |
| Meta | META (1 vote) | Class B (10 votes, not traded) | — |

> ℹ️ The BRK.A/BRK.B prices are approximate as of May 2026 — always check the live quote. To keep the comparison from going stale, remember the ratio instead: by Berkshire's charter, **BRK.B ≈ 1/1500 of BRK.A's price** (one Class B share equals 1/1500 of a Class A share's economic stake).

### Fundamental Metrics

#### P/E Ratio (Price-to-Earnings)
```
P/E = Stock Price / Earnings Per Share (EPS)

Rough guideposts (descriptive, NOT a buy signal):
├── P/E < 15 — the market prices the company modestly
├── P/E 15-25 — a typical range
└── P/E > 25 — the market is pricing in high growth

⚠️ Only compare P/E within the same industry!
```

> ℹ️ P/E helps you **understand** how the market values a company, but for a passive index investor it is **not** an entry-timing tool. A broad index (such as the S&P 500) can sit above a P/E of 25 for years without being "overvalued" in any actionable sense for a long-term holder. Picking individual stocks on a "low P/E" is not what this course teaches.

#### EPS (Earnings Per Share)
```
EPS = Net Income / Number of Shares

Example:
Net Income: $10 billion
Shares: 1 billion
EPS = $10
```

#### Dividend Yield
```
Yield = (Annual Dividend / Stock Price) × 100%

Example:
Dividend: $4 per year
Price: $100
Yield = 4%
```

---

## Lesson 3.2: Bonds

### What is a Bond?

A bond is a debt security. When you buy a bond, you're lending money to the issuer.

```
Bond Structure:
├── Face Value (par): usually $1,000
├── Coupon Rate: % of face value
├── Maturity Date: when it's paid back
└── Issuer: government/corporation
```

### Types of Bonds

#### US Government Bonds

| Type | Term | Coupon | Features |
|------|------|--------|----------|
| **T-Bills** | up to 1 year | None | Sold at discount |
| **T-Notes** | 2-10 years | Every 6 months | Medium risk/return |
| **T-Bonds** | 20-30 years | Every 6 months | Long-term investments |
| **TIPS** | 5-30 years | Every 6 months | Inflation protection (principal by CPI) |

#### Corporate Bonds

```
Investment Grade
├── Rating: BBB and above
├── Low default risk
└── Moderate yield

High Yield / Junk Bonds
├── Rating: below BBB
├── High default risk
└── High yield
```

### Credit Ratings

| Rating | Category | Description |
|--------|----------|-------------|
| AAA | 🟢 Investment Grade | Highest quality |
| AA | 🟢 Investment Grade | Very high quality |
| A | 🟢 Investment Grade | High quality |
| BBB | 🟢 Investment Grade | Good quality |
| BB | 🟡 High Yield | Speculative |
| B | 🟡 High Yield | High risk |
| CCC-C | 🔴 Junk | Very high risk |
| D | 🔴 Default | Default |

### Bond Risks

1. **Interest rate risk** — price falls when rates rise
2. **Credit risk** — risk of issuer default
3. **Inflation risk** — inflation "eats" returns
4. **Liquidity risk** — difficulty selling

---

## Lesson 3.3: ETFs (Exchange-Traded Funds)

### What is an ETF?

An ETF is an exchange-traded fund that trades like a regular stock.

```
ETF combines:
├── Advantages of index funds
│   └── Diversification, low fees
└── Advantages of stocks
    └── Intraday trading, liquidity
```

### Types of ETFs

```
By asset class:
├── Equity ETFs
├── Bond ETFs
├── Commodity ETFs
└── Real Estate ETFs

By strategy:
├── Index ETFs
├── Sector ETFs
├── Thematic ETFs
├── Factor ETFs
└── Actively managed

By geography:
├── US (Domestic)
├── International
├── Emerging Markets
└── Global
```

### Popular ETFs

| Ticker | Name | Description | Expense Ratio |
|--------|------|-------------|---------------|
| SPY | SPDR S&P 500 | S&P 500 | 0.09% |
| VOO | Vanguard S&P 500 | S&P 500 | 0.03% |
| VTI | Vanguard Total Stock | Entire US market | 0.03% |
| QQQ | Invesco NASDAQ-100 | NASDAQ-100 | 0.20% |
| VEA | Vanguard FTSE Developed | Developed markets | 0.05% |
| VWO | Vanguard FTSE Emerging | Emerging markets | 0.08% |
| BND | Vanguard Total Bond | US bonds | 0.03% |
| VNQ | Vanguard Real Estate | US real estate | 0.12% |

### Expense Ratio

```
Expense Ratio — annual fund fee

Example:
Investment: $10,000
Expense Ratio: 0.03%
Annual fee: $3

Compare:
├── Vanguard VOO: 0.03% ($3 per $10k)
├── Active fund: 1.00% ($100 per $10k)
└── Difference over 30 years: thousands of dollars!
```

> ℹ️ The expense ratio is the **fund's annual fee**, not a trading charge. Buying or selling the ETF itself costs nothing in commissions: since 2019, online trades of US-listed stocks and ETFs are **$0 commission** at major US brokers (options and some foreign/OTC trades may carry fees — irrelevant for a VOO/VTI buyer). So the ETF "fees" row is about the expense ratio, not a per-order brokerage commission.

---

## Lesson 3.4: Mutual Funds

### Difference from ETFs

| Feature | ETF | Mutual Fund |
|---------|-----|-------------|
| Trading | Throughout day | Once per day (NAV) |
| Minimum investment | ~$1 (fractional shares) | $0–$1 at many index funds* |
| Fees | Usually lower | Can be higher |
| Tax efficiency | Higher | Lower |
| Automatic investments | Easy (fractional shares) | Easy |

> ℹ️ *As of 2026, the practical ETF minimum is ~$1 thanks to fractional shares at Fidelity and Vanguard (Schwab offers fractional buys via Stock Slices, a narrower lineup). Many flagship index funds now have no minimum (Fidelity ZERO funds = $0; Schwab SWPPX/SWTSX = $0), though some share classes still carry one (e.g., Vanguard Admiral shares are often ~$3,000). Automatic recurring purchases are available for both ETFs (via fractional shares) and mutual funds. ETFs keep their tax-efficiency edge — the in-kind creation/redemption mechanism largely avoids capital-gains distributions.

### Types of Mutual Funds

```
├── Index Funds — follow an index
├── Actively Managed — active management
├── Target-Date Funds — for retirement
├── Money Market Funds — money market
└── Balanced Funds — mix of stocks and bonds
```

### Target-Date Funds

Automatically change asset allocation as retirement approaches:

```
2050 Target Date Fund:

Now (30 years to retirement):
├── Stocks: 90%
└── Bonds: 10%

In 20 years:
├── Stocks: 70%
└── Bonds: 30%

In 2050 (retirement):
├── Stocks: 40%
└── Bonds: 60%
```

---

## Lesson 3.5: REITs (Real Estate Investment Trusts)

### What is a REIT?

REIT (Real Estate Investment Trust) — a company that owns income-producing real estate.

```
Advantages:
├── Access to real estate without buying properties
├── High dividends (must pay 90% of profits)
├── Liquidity (traded on exchanges)
└── Diversification across properties
```

### Types of REITs

```
├── Equity REITs — own real estate
│   ├── Residential
│   ├── Offices
│   ├── Shopping centers
│   ├── Warehouses
│   └── Data centers
│
├── Mortgage REITs — mortgage loans
│   └── Income from interest
│
└── Hybrid REITs — combination
```

### Popular REITs

| Ticker | Name | Sector |
|--------|------|--------|
| VNQ | Vanguard Real Estate ETF | Broad REIT |
| O | Realty Income | Retail |
| AMT | American Tower | Telecommunications |
| PLD | Prologis | Warehouses & logistics |
| EQIX | Equinix | Data centers |

---

## Lesson 3.6: Options (for Advanced)

### Options Basics

> ⚠️ Options are a complex instrument. Study them thoroughly before using!

```
Call Option — right to buy an asset at a fixed price
Put Option — right to sell an asset at a fixed price

Key concepts:
├── Strike Price — exercise price
├── Premium — cost of the option
├── Expiration — expiration date
└── Underlying — base asset
```

### Basic Strategies

```
Buying Call:
├── Expecting price increase
├── Risk limited to premium
└── Unlimited profit potential

Buying Put:
├── Expecting price decrease
├── Risk limited to premium
└── Portfolio insurance (hedge)

Selling Covered Call:
├── Selling call on shares you own
├── Additional income
└── Limits upside potential
```

---

## Practical Assignment

1. **Find the P/E Ratio** for Apple, Microsoft, and Amazon. Compare them.

2. **Look up the yield** on 10-year Treasury Notes (10-Year Treasury Yield).

3. **Compare ETFs**: VOO and SPY — find the difference in expense ratio.

4. **Find the dividend yield** for REIT Realty Income (O).

5. **Determine** which instrument is best for:
   - A conservative investor in retirement
   - A young investor with 30+ year horizon
   - An investor seeking passive income

---

## Additional Reading

| Resource | Description |
|----------|-------------|
| [Investopedia: ETF vs Mutual Fund](https://www.investopedia.com/articles/exchangetradedfunds/08/etf-mutual-fund-difference.asp) | Comparing ETFs and mutual funds |
| [Vanguard: ETF Education](https://investor.vanguard.com/investment-products/etfs) | Official Vanguard ETF resource |
| [Morningstar](https://www.morningstar.com/) | Fund analysis and ratings |
| "The Little Book of Common Sense Investing" — John Bogle | Bible of index investing |

---

## Key Takeaways

- Stocks give you ownership in a company and growth potential
- Bonds are a more conservative instrument with fixed income
- ETFs are the best way to diversify with low fees
- REITs allow investing in real estate through the stock exchange
- Options are a tool for experienced investors

---

## Self-Check Test

<div id="ic-quiz-root"></div>

<script type="application/json" id="ic-quiz-data">
{
  "questions": [
    {
      "q": "What Expense Ratio is considered good for an index ETF?",
      "options": ["Less than 0.10% (for example, 0.03% for VOO and VTI)", "About 1%", "About 2.5%", "The higher, the better"],
      "correct": 0,
      "explain": "For index ETFs an Expense Ratio below 0.10% is considered good; VOO and VTI charge about 0.03%."
    },
    {
      "q": "What is an ETF and what is its main advantage?",
      "options": ["A single stock of one company", "An exchange-traded fund: diversification with low fees in a single purchase", "A bank deposit with a guaranteed return", "A cryptocurrency wallet"],
      "correct": 1,
      "explain": "An ETF is an exchange-traded fund that trades like a stock; its main advantage is diversification with low fees in a single purchase."
    },
    {
      "q": "How do T-Bills differ from T-Bonds?",
      "options": ["T-Bills — up to 1 year, no coupon, sold at a discount; T-Bonds — 20-30 years with a coupon every 6 months", "T-Bills — 20-30 years with a coupon; T-Bonds — up to a year with no coupon", "Both are issued for exactly 10 years", "T-Bills are issued by private companies, T-Bonds by the government"],
      "correct": 0,
      "explain": "T-Bills are short-term (up to 1 year) with no coupon, sold at a discount; T-Bonds are long-term (20-30 years) with a coupon every six months."
    },
    {
      "q": "Why do REITs pay high dividends?",
      "options": ["Because real estate prices always rise", "To attract short-term speculators", "They must pay at least 90% of profits as dividends to keep their tax benefits", "The government subsidizes them directly"],
      "correct": 2,
      "explain": "REITs are required to distribute at least 90% of profits as dividends to retain their tax advantages."
    }
  ]
}
</script>

<details>
<summary markdown="span"><b>Question 1:</b> What is an ETF and what is its main advantage?</summary>

**Answer:** ETF (Exchange-Traded Fund) — an exchange-traded fund that trades like a stock. Main advantage — diversification with low fees in a single purchase.

</details>

<details>
<summary markdown="span"><b>Question 2:</b> What is Expense Ratio and what is considered good for index ETFs?</summary>

**Answer:** Expense Ratio is the annual fund fee. For index ETFs, less than 0.10% is considered good (for example, 0.03% for VOO and VTI).

</details>

<details>
<summary markdown="span"><b>Question 3:</b> What does P/E Ratio mean and how do you interpret it?</summary>

**Answer:** P/E = Stock Price / Earnings Per Share. Rough guideposts: P/E < 15 — a modest valuation, 15-25 — a typical range, > 25 — the market is pricing in high growth. Only compare within the same industry. It's a descriptive metric, not a buy signal: for a passive index investor, P/E is not an entry-timing tool.

</details>

<details>
<summary markdown="span"><b>Question 4:</b> How do T-Bills differ from T-Bonds?</summary>

**Answer:**
- **T-Bills** — term up to 1 year, no coupon payments, sold at discount
- **T-Bonds** — term 20-30 years, coupon every 6 months, long-term investments

</details>

<details>
<summary markdown="span"><b>Question 5:</b> What is a REIT and why do they pay high dividends?</summary>

**Answer:** REIT (Real Estate Investment Trust) — a real estate fund. Must pay at least 90% of profits as dividends to receive tax benefits.

</details>

<details>
<summary markdown="span"><b>Question 6:</b> Which ETF tracks the entire US market and what is its expense ratio?</summary>

**Answer:** VTI (Vanguard Total Stock Market) — covers ~3,500 US stocks with expense ratio of 0.03%.

</details>

**Results:**
- 5-6 correct: Excellent! Move on to Module 4
- 3-4 correct: Re-read sections on ETFs and bonds
- 0-2 correct: We recommend going through the module again

---

[← Module 2](/investing-course/en/module-02-stock-market/) | [Module 4 →](/investing-course/en/module-04-brokers-taxes/) · [📖 Glossary](/investing-course/en/GLOSSARY/)
