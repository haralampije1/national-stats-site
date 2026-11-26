# National Statistics Site

A comprehensive, responsive national statistics site for exploring key indicators across 20 major economies worldwide.

## Features

- **Country Profiles**: Detailed statistics for 20 countries including GDP, population, HDI, life expectancy, and 15+ other indicators
- **Indicator Rankings**: Sort and compare countries on any indicator with sortable tables
- **Side-by-Side Comparison**: Visual charts comparing up to 6 countries on any indicator
- **Responsive Design**: Works on desktop and mobile devices
- **No External Dependencies**: All code and data self-contained, works offline

## Data Sources

All data from reputable international organizations (2022-2023):
- World Bank
- International Monetary Fund (IMF)
- United Nations Development Programme (UNDP)
- UNESCO
- International Labour Organization (ILO)
- International Telecommunication Union (ITU)
- International Energy Agency (IEA)
- OECD
- Global Carbon Project

## Pages

- `/` - Home: Country grid with region filter, indicator cards
- `/country/<CODE>` - Country detail: All indicators with rankings
- `/compare` - Compare: Visual comparison of selected countries
- `/indicator/<KEY>` - Indicator ranking: All countries sorted by indicator
- `/about` - About: Methodology and sources

## Tech Stack

- Vanilla JavaScript (ES Modules)
- CSS Grid & Flexbox
- Canvas API for charts
- Hash-based routing (no server required)
- ~50 KB total (HTML + CSS + JS + Data)

## Competition

Built for the make.fun "Best National Statistics Site" bounty.

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![Rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/haralampije1/national-stats-site/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![Reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/haralampije1/national-stats-site/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

## License

MIT License - see LICENSE file for details.