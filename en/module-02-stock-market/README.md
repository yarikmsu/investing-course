---
layout: default
title: "Module 2: Stock Market"
parent: "Course Modules"
nav_order: 3
description: "NYSE, NASDAQ exchanges. S&P 500, Dow Jones indexes"
permalink: /module-02-stock-market/
---

# Module 2: The US Stock Market

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
| **Level** | Beginner |
| **Time** | ~25 minutes |
| **Prerequisites** | [Module 1](/investing-course/en/module-01-introduction/) |

After completing this module, you'll be able to:
- Distinguish major exchanges (NYSE, NASDAQ)
- Understand key indexes (S&P 500, Dow Jones, NASDAQ)
- Know market hours and trading specifics
- Understand how companies join indexes

---

## Lesson 2.1: US Stock Market Structure

### Major Exchanges

#### NYSE (New York Stock Exchange)
- World's largest exchange
- Founded in 1792
- Located on Wall Street, New York
- Trades major companies: Berkshire Hathaway, Johnson & Johnson, Walmart
- Symbol: white facade with columns

#### NASDAQ
- First electronic exchange
- Founded in 1971
- Focus on technology companies
- Apple, Microsoft, Amazon, Google, Meta, Tesla
- Fully electronic trading

#### Other Venues
- **NYSE American** (formerly AMEX) — small and mid-cap companies
- **OTC Markets** — over-the-counter market
- **Dark Pools** — private venues for large trades

### Market Participants

```
┌─────────────────────────────────────────────────┐
│              MARKET PARTICIPANTS                │
├─────────────────────────────────────────────────┤
│                                                 │
│  Institutional Investors:                       │
│  ├── Pension funds                              │
│  ├── Hedge funds                                │
│  ├── Mutual funds                               │
│  └── Insurance companies                        │
│                                                 │
│  Retail Investors:                              │
│  ├── Individual investors                       │
│  └── Traders                                    │
│                                                 │
│  Market Makers:                                 │
│  ├── Provide liquidity                          │
│  └── Set bid/ask spread                         │
│                                                 │
│  Regulators:                                    │
│  ├── SEC (Securities and Exchange Commission)   │
│  └── FINRA (Financial Industry Regulatory)      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Lesson 2.2: Market Hours

### Trading Sessions (Eastern Time)

| Session | Time (ET) | Description |
|---------|-----------|-------------|
| Pre-market | 4:00 AM - 9:30 AM | Lower liquidity |
| Regular | 9:30 AM - 4:00 PM | Main trading session |
| After-hours | 4:00 PM - 8:00 PM | Lower liquidity |

### Market Holidays (Exchange Closed)

- New Year's Day (January 1)
- Martin Luther King Jr. Day (3rd Monday of January)
- Presidents' Day (3rd Monday of February)
- Good Friday (Friday before Easter)
- Memorial Day (Last Monday of May)
- Juneteenth (June 19)
- Independence Day (July 4)
- Labor Day (1st Monday of September)
- Thanksgiving Day (4th Thursday of November)
- Christmas Day (December 25)

### Important Notes

```
⚠️ Consider time zone differences!

For Pacific Time (PT):
- Market opens: 6:30 AM PT
- Market closes: 1:00 PM PT

Daylight saving time may shift the schedule by 1 hour.
```

---

## Lesson 2.3: Major Indexes

### S&P 500

Index of 500 largest American companies.

```
Characteristics:
├── 500 companies
├── ~80% of total US market capitalization
├── Weighted by market cap
└── Main benchmark for investors

Top companies (approximate weights):
├── NVIDIA       ~8%
├── Apple        ~7%
├── Alphabet     ~6%
├── Microsoft    ~5%
└── Amazon       ~4%
```

### Dow Jones Industrial Average (DJIA)

Oldest US index, 30 companies.

```
Characteristics:
├── 30 "blue chip" companies
├── Weighted by stock price
├── Includes only largest companies
└── Less representative than S&P 500

Example companies:
├── Apple
├── Boeing
├── Coca-Cola
├── Goldman Sachs
└── McDonald's
```

### NASDAQ Composite

All companies traded on NASDAQ.

```
Characteristics:
├── ~3,000+ companies
├── Tech focus
├── High volatility
└── Fast growth in good times

NASDAQ-100:
├── 100 largest non-financial companies
└── Basis for QQQ ETF
```

### Index Comparison

| Index | Number | Weighting | Focus |
|-------|--------|-----------|-------|
| S&P 500 | 500 | By market cap | Broad market |
| Dow Jones | 30 | By price | Blue chips |
| NASDAQ | 3000+ | By market cap | Technology |
| Russell 2000 | 2000 | By market cap | Small companies |

---

## Lesson 2.4: How to Read Stock Information

### Ticker Symbol

Unique letter code for a company:

```
AAPL  — Apple
MSFT  — Microsoft
GOOGL — Alphabet (Google)
AMZN  — Amazon
TSLA  — Tesla
META  — Meta (Facebook)
```

### Stock Quote

```
AAPL (Apple Inc.)
├── Last: $175.50        ← Last trade price
├── Bid: $175.48         ← Buying price
├── Ask: $175.52         ← Selling price
├── Spread: $0.04        ← Bid/ask difference
├── Volume: 45.2M        ← Trading volume (shares)
├── Avg Volume: 52.1M    ← Average volume
├── Day Range: $173.20 - $176.30  ← Day's range
├── 52W Range: $124.17 - $198.23  ← Year's range
├── Market Cap: $2.75T   ← Capitalization
├── P/E: 28.5            ← Price/Earnings ratio
└── Div Yield: 0.55%     ← Dividend yield
```

### Order Types

#### Market Order
Buy/sell at current market price.

```
+ Instant execution
- Price may differ from expected
```

#### Limit Order
Buy/sell at specified price or better.

```
+ Price control
- May not execute
```

#### Stop Order
Becomes market order when specified price is reached.

```
Used for:
├── Limiting losses (Stop-Loss)
└── Locking in profits (Take-Profit)
```

> ⚠️ Stop-Loss and Take-Profit are market-timing tools that work against a long-term buy-and-hold strategy. A stop-loss can knock you out of a position on a temporary dip right before the market recovers. A passive index investor doesn't need them.

#### Stop-Limit Order
Combination of stop and limit order.

> 💡 **Modern reality (2026):** at major US brokers (Fidelity, Schwab, Vanguard), trading US-listed stocks and ETFs is **$0 commission** — the standard since 2019 (this covers online orders; options and some foreign/OTC trades may carry fees). Trades now settle on a **T+1** basis — the next business day (effective May 28, 2024). For a passive investor this means buying VOO/VTI is free, and proceeds from a sale are available the next business day.

---

## Lesson 2.5: How Stock Prices Are Formed

### Supply and Demand

```
         Buyers              Sellers
              │                   │
              ▼                   ▼
         ┌────────┐         ┌────────┐
         │  BID   │◄───────►│  ASK   │
         │$175.48 │         │$175.52 │
         └────────┘         └────────┘
              │                   │
              └─────────┬─────────┘
                        │
                        ▼
                   ┌────────┐
                   │ TRADE  │
                   │$175.50 │
                   └────────┘
```

### Factors Affecting Price

1. **Financial results** — earnings, revenue, growth
2. **Company news** — products, management, deals
3. **Macroeconomics** — Fed rates, inflation, GDP
4. **Market sentiment** — fear, greed, trends
5. **Large player actions** — institutional buying/selling

---

## Practical Assignment

1. **Find tickers** for the following companies:
   - Nike
   - Starbucks
   - Netflix
   - Visa

2. **Check current values** of S&P 500, Dow Jones, and NASDAQ indexes.

3. **Determine** which sector these companies belong to:
   - Johnson & Johnson
   - JPMorgan Chase
   - Exxon Mobil

4. **Calculate** what time the US market opens and closes in your local time zone.

---

## Key Takeaways

- NYSE and NASDAQ are the two main US exchanges
- S&P 500 is the main indicator of the American market
- Market operates 9:30 AM to 4:00 PM Eastern Time
- For a long-term passive investor, a market or limit order is all you need; stop-losses and take-profits are traders' tools and aren't needed in a buy-and-hold strategy

---

## Self-Check Test

**Quick self-check (a few sample questions).** This scored widget is a short warm-up; the full self-check with answers is right below it, and a perfect score here doesn't replace it.

<div id="ic-quiz-root"></div>

<script type="application/json" id="ic-quiz-data">
{
  "questions": [
    {
      "q": "On which exchange do Apple, Microsoft, and Tesla trade?",
      "options": ["NYSE", "NASDAQ", "London Stock Exchange", "Chicago Mercantile Exchange (CME)"],
      "correct": 1,
      "explain": "These technology companies trade on NASDAQ — the first electronic exchange."
    },
    {
      "q": "How many companies are in the S&P 500 index and what market share does it cover?",
      "options": ["30 companies, about 50% of the market", "100 companies, about 60% of the market", "500 companies, about 80% of the market", "3000 companies, about 100% of the market"],
      "correct": 2,
      "explain": "The S&P 500 holds 500 companies and covers about 80% of total US market capitalization."
    },
    {
      "q": "What does a Limit Order guarantee?",
      "options": ["Execution at the specified price or better, but execution is not guaranteed", "Instant execution at any market price", "Execution always at the closing price", "Complete elimination of broker fees"],
      "correct": 0,
      "explain": "A Limit Order executes at the specified price or better but may not execute at all; instant execution at market price is what a Market Order provides."
    },
    {
      "q": "How does the Dow Jones index differ from the S&P 500?",
      "options": ["Both indexes are weighted by market cap in the same way", "Dow Jones covers only the technology sector", "Dow Jones has 30 companies and is price-weighted; the S&P 500 has 500 companies and is market cap-weighted", "Dow Jones includes 500 companies while the S&P has 30"],
      "correct": 2,
      "explain": "Dow Jones is 30 price-weighted companies, whereas the S&P 500 holds 500 companies and is market cap-weighted."
    }
  ]
}
</script>

<details>
<summary markdown="span"><b>Question 1:</b> On which exchange do Apple, Microsoft, and Tesla trade?</summary>

**Answer:** NASDAQ — the first electronic exchange, focusing on technology companies.

</details>

<details>
<summary markdown="span"><b>Question 2:</b> What time does the US market open in Eastern Time?</summary>

**Answer:** 9:30 AM ET (the main session starts at 9:30 AM Eastern Time).

</details>

<details>
<summary markdown="span"><b>Question 3:</b> How many companies are in the S&P 500 index and what market share does it cover?</summary>

**Answer:** 500 companies, covering about 80% of total US market capitalization.

</details>

<details>
<summary markdown="span"><b>Question 4:</b> What is a Market Order and Limit Order?</summary>

**Answer:**
- **Market Order** — buy/sell at current market price (instant execution)
- **Limit Order** — buy/sell at specified price or better (may not execute)

</details>

<details>
<summary markdown="span"><b>Question 5:</b> What does the ticker AAPL mean?</summary>

**Answer:** Apple Inc. — the unique letter code for the company on the exchange.

</details>

<details>
<summary markdown="span"><b>Question 6:</b> How does the Dow Jones index differ from S&P 500?</summary>

**Answer:**
- Dow Jones: 30 companies, price-weighted
- S&P 500: 500 companies, market cap-weighted, more representative

</details>

**Results:**
- 5-6 correct: Excellent! Move on to Module 3
- 3-4 correct: Re-read sections on indexes and orders
- 0-2 correct: We recommend going through the module again

---

## 📚 Additional Reading

### Books

| Book | Author | About |
|------|--------|-------|
| **"A Random Walk Down Wall Street"** | Burton Malkiel | Classic on market efficiency |
| **"The Little Book of Common Sense Investing"** | John Bogle | Index investing philosophy |
| **"Stocks for the Long Run"** | Jeremy Siegel | Long-term stock returns |

### Online Resources

- [Investopedia: Stock Market](https://www.investopedia.com/terms/s/stockmarket.asp) — stock market basics
- [NYSE Official Site](https://www.nyse.com/) — New York Stock Exchange
- [NASDAQ](https://www.nasdaq.com/) — NASDAQ official site

### Market Data

- [Yahoo Finance](https://finance.yahoo.com/) — free quotes and charts
- [Google Finance](https://www.google.com/finance/) — market overview
- [TradingView](https://www.tradingview.com/) — advanced charts

---

[← Module 1](/investing-course/en/module-01-introduction/) | [Module 3 →](/investing-course/en/module-03-instruments/) · [📖 Glossary](/investing-course/en/GLOSSARY/)
