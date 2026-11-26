// National Statistics Data
// Sources: World Bank (WB), United Nations (UN), International Monetary Fund (IMF), OECD
// All data as of latest available year (2022-2023)

export const countries = [
  { code: 'USA', name: 'United States', region: 'North America', population: 339996563, area: 9833520, gdp: 27360000000000, gdpPerCapita: 80412, hdi: 0.921, lifeExpectancy: 76.4, literacyRate: 99, unemploymentRate: 3.6, inflationRate: 4.1, co2PerCapita: 14.24, internetUsers: 92, mobileSubscriptions: 107, renewableEnergy: 21.5, rndExpenditure: 3.45, taxRevenue: 17.7, governmentDebt: 123.4, exportGdp: 10.2, importGdp: 14.1 },
  { code: 'CHN', name: 'China', region: 'East Asia', population: 1425671352, area: 9596960, gdp: 17700000000000, gdpPerCapita: 12415, hdi: 0.768, lifeExpectancy: 77.1, literacyRate: 96.8, unemploymentRate: 5.2, inflationRate: 0.2, co2PerCapita: 8.05, internetUsers: 73, mobileSubscriptions: 119, renewableEnergy: 30.6, rndExpenditure: 2.43, taxRevenue: 15.2, governmentDebt: 77.1, exportGdp: 19.7, importGdp: 17.3 },
  { code: 'JPN', name: 'Japan', region: 'East Asia', population: 125416877, area: 377975, gdp: 4210000000000, gdpPerCapita: 33554, hdi: 0.925, lifeExpectancy: 84.5, literacyRate: 99, unemploymentRate: 2.6, inflationRate: 3.2, co2PerCapita: 8.39, internetUsers: 85, mobileSubscriptions: 147, renewableEnergy: 22.7, rndExpenditure: 3.26, taxRevenue: 18.5, governmentDebt: 263.9, exportGdp: 16.8, importGdp: 19.2 },
  { code: 'DEU', name: 'Germany', region: 'Europe', population: 83294633, area: 357588, gdp: 4460000000000, gdpPerCapita: 53541, hdi: 0.942, lifeExpectancy: 80.9, literacyRate: 99, unemploymentRate: 3.0, inflationRate: 5.9, co2PerCapita: 7.59, internetUsers: 91, mobileSubscriptions: 128, renewableEnergy: 46.9, rndExpenditure: 3.14, taxRevenue: 23.4, governmentDebt: 66.1, exportGdp: 47.4, importGdp: 41.5 },
  { code: 'IND', name: 'India', region: 'South Asia', population: 1428627663, area: 3287263, gdp: 3390000000000, gdpPerCapita: 2373, hdi: 0.633, lifeExpectancy: 67.2, literacyRate: 74.4, unemploymentRate: 7.1, inflationRate: 6.7, co2PerCapita: 1.91, internetUsers: 48, mobileSubscriptions: 86, renewableEnergy: 36.2, rndExpenditure: 0.66, taxRevenue: 10.8, governmentDebt: 83.1, exportGdp: 21.9, importGdp: 23.4 },
  { code: 'GBR', name: 'United Kingdom', region: 'Europe', population: 67736802, area: 243610, gdp: 3340000000000, gdpPerCapita: 49309, hdi: 0.929, lifeExpectancy: 80.7, literacyRate: 99, unemploymentRate: 4.2, inflationRate: 7.3, co2PerCapita: 4.85, internetUsers: 96, mobileSubscriptions: 124, renewableEnergy: 41.7, rndExpenditure: 2.91, taxRevenue: 26.8, governmentDebt: 101.9, exportGdp: 31.2, importGdp: 33.7 },
  { code: 'FRA', name: 'France', region: 'Europe', population: 68042591, area: 551695, gdp: 3030000000000, gdpPerCapita: 44531, hdi: 0.903, lifeExpectancy: 82.3, literacyRate: 99, unemploymentRate: 7.3, inflationRate: 5.2, co2PerCapita: 4.38, internetUsers: 86, mobileSubscriptions: 115, renewableEnergy: 24.1, rndExpenditure: 2.35, taxRevenue: 26.6, governmentDebt: 111.8, exportGdp: 32.1, importGdp: 34.2 },
  { code: 'BRA', name: 'Brazil', region: 'South America', population: 216422446, area: 8515767, gdp: 1920000000000, gdpPerCapita: 8871, hdi: 0.754, lifeExpectancy: 72.8, literacyRate: 93.2, unemploymentRate: 8.5, inflationRate: 4.6, co2PerCapita: 2.20, internetUsers: 81, mobileSubscriptions: 105, renewableEnergy: 48.4, rndExpenditure: 1.16, taxRevenue: 15.8, governmentDebt: 85.9, exportGdp: 18.5, importGdp: 16.2 },
  { code: 'CAN', name: 'Canada', region: 'North America', population: 38781291, area: 9984670, gdp: 2140000000000, gdpPerCapita: 55180, hdi: 0.935, lifeExpectancy: 82.2, literacyRate: 99, unemploymentRate: 5.4, inflationRate: 3.9, co2PerCapita: 14.20, internetUsers: 93, mobileSubscriptions: 90, renewableEnergy: 67.2, rndExpenditure: 1.69, taxRevenue: 19.2, governmentDebt: 107.4, exportGdp: 33.7, importGdp: 33.2 },
  { code: 'AUS', name: 'Australia', region: 'Oceania', population: 26439111, area: 7692024, gdp: 1690000000000, gdpPerCapita: 63930, hdi: 0.946, lifeExpectancy: 83.3, literacyRate: 99, unemploymentRate: 3.7, inflationRate: 5.6, co2PerCapita: 15.10, internetUsers: 91, mobileSubscriptions: 102, renewableEnergy: 29.5, rndExpenditure: 1.84, taxRevenue: 23.5, governmentDebt: 57.2, exportGdp: 25.1, importGdp: 22.8 },
  { code: 'KOR', name: 'South Korea', region: 'East Asia', population: 51784059, area: 100339, gdp: 1670000000000, gdpPerCapita: 32254, hdi: 0.925, lifeExpectancy: 83.5, literacyRate: 98, unemploymentRate: 2.9, inflationRate: 3.6, co2PerCapita: 11.85, internetUsers: 97, mobileSubscriptions: 135, renewableEnergy: 8.7, rndExpenditure: 4.81, taxRevenue: 22.1, governmentDebt: 54.3, exportGdp: 42.8, importGdp: 37.5 },
  { code: 'MEX', name: 'Mexico', region: 'North America', population: 128455567, area: 1964375, gdp: 1460000000000, gdpPerCapita: 11366, hdi: 0.758, lifeExpectancy: 70.2, literacyRate: 95.2, unemploymentRate: 2.8, inflationRate: 5.5, co2PerCapita: 3.07, internetUsers: 76, mobileSubscriptions: 93, renewableEnergy: 20.1, rndExpenditure: 0.31, taxRevenue: 13.5, governmentDebt: 50.3, exportGdp: 39.8, importGdp: 38.7 },
  { code: 'IDN', name: 'Indonesia', region: 'Southeast Asia', population: 277534122, area: 1904569, gdp: 1320000000000, gdpPerCapita: 4756, hdi: 0.705, lifeExpectancy: 67.6, literacyRate: 96, unemploymentRate: 5.3, inflationRate: 3.7, co2PerCapita: 2.27, internetUsers: 62, mobileSubscriptions: 129, renewableEnergy: 17.8, rndExpenditure: 0.28, taxRevenue: 10.2, governmentDebt: 39.9, exportGdp: 22.1, importGdp: 20.8 },
  { code: 'SAU', name: 'Saudi Arabia', region: 'Middle East', population: 36947025, area: 2149690, gdp: 1060000000000, gdpPerCapita: 28690, hdi: 0.875, lifeExpectancy: 77.4, literacyRate: 97.6, unemploymentRate: 5.7, inflationRate: 2.5, co2PerCapita: 16.96, internetUsers: 99, mobileSubscriptions: 123, renewableEnergy: 0.1, rndExpenditure: 0.45, taxRevenue: 6.8, governmentDebt: 26.1, exportGdp: 45.2, importGdp: 28.4 },
  { code: 'TUR', name: 'Turkey', region: 'Europe/Asia', population: 85372377, area: 783562, gdp: 905000000000, gdpPerCapita: 10600, hdi: 0.838, lifeExpectancy: 77.7, literacyRate: 96.7, unemploymentRate: 10.4, inflationRate: 53.9, co2PerCapita: 4.48, internetUsers: 81, mobileSubscriptions: 99, renewableEnergy: 16.7, rndExpenditure: 1.09, taxRevenue: 16.2, governmentDebt: 33.9, exportGdp: 34.7, importGdp: 32.1 },
  { code: 'NGA', name: 'Nigeria', region: 'Africa', population: 223804632, area: 923768, gdp: 477000000000, gdpPerCapita: 2131, hdi: 0.535, lifeExpectancy: 52.7, literacyRate: 62, unemploymentRate: 4.1, inflationRate: 24.5, co2PerCapita: 0.56, internetUsers: 36, mobileSubscriptions: 92, renewableEnergy: 85.3, rndExpenditure: 0.12, taxRevenue: 5.8, governmentDebt: 37.1, exportGdp: 12.8, importGdp: 17.5 },
  { code: 'ZAF', name: 'South Africa', region: 'Africa', population: 60414495, area: 1221037, gdp: 405000000000, gdpPerCapita: 6704, hdi: 0.713, lifeExpectancy: 62.4, literacyRate: 95, unemploymentRate: 32.9, inflationRate: 5.9, co2PerCapita: 7.34, internetUsers: 72, mobileSubscriptions: 168, renewableEnergy: 11.2, rndExpenditure: 0.62, taxRevenue: 23.4, governmentDebt: 71.4, exportGdp: 31.2, importGdp: 28.9 },
  { code: 'ARG', name: 'Argentina', region: 'South America', population: 46654581, area: 2780400, gdp: 630000000000, gdpPerCapita: 13503, hdi: 0.842, lifeExpectancy: 75.4, literacyRate: 99, unemploymentRate: 6.9, inflationRate: 142.7, co2PerCapita: 4.04, internetUsers: 85, mobileSubscriptions: 124, renewableEnergy: 15.2, rndExpenditure: 0.52, taxRevenue: 17.3, governmentDebt: 84.5, exportGdp: 16.4, importGdp: 14.2 },
  { code: 'EGY', name: 'Egypt', region: 'Africa/Middle East', population: 112716598, area: 1002450, gdp: 477000000000, gdpPerCapita: 4232, hdi: 0.708, lifeExpectancy: 70.2, literacyRate: 71.2, unemploymentRate: 7.1, inflationRate: 24.4, co2PerCapita: 2.53, internetUsers: 57, mobileSubscriptions: 96, renewableEnergy: 9.2, rndExpenditure: 0.72, taxRevenue: 12.8, governmentDebt: 88.5, exportGdp: 14.3, importGdp: 24.7 },
  { code: 'VNM', name: 'Vietnam', region: 'Southeast Asia', population: 98858950, area: 331212, gdp: 434000000000, gdpPerCapita: 4390, hdi: 0.703, lifeExpectancy: 73.6, literacyRate: 95.8, unemploymentRate: 2.3, inflationRate: 3.3, co2PerCapita: 3.35, internetUsers: 73, mobileSubscriptions: 146, renewableEnergy: 38.4, rndExpenditure: 0.53, taxRevenue: 16.4, governmentDebt: 37.2, exportGdp: 106.8, importGdp: 97.4 },
  { code: 'POL', name: 'Poland', region: 'Europe', population: 37747124, area: 312685, gdp: 688000000000, gdpPerCapita: 18227, hdi: 0.876, lifeExpectancy: 77.1, literacyRate: 99.8, unemploymentRate: 2.9, inflationRate: 11.4, co2PerCapita: 7.11, internetUsers: 87, mobileSubscriptions: 142, renewableEnergy: 21.3, rndExpenditure: 1.39, taxRevenue: 20.1, governmentDebt: 49.1, exportGdp: 59.2, importGdp: 57.8 },
];

export const indicators = [
  { key: 'population', name: 'Population', unit: 'people', format: 'number', description: 'Total population (2023)', source: 'World Bank' },
  { key: 'area', name: 'Land Area', unit: 'km²', format: 'number', description: 'Total land area (2022)', source: 'World Bank' },
  { key: 'gdp', name: 'GDP (Nominal)', unit: 'USD', format: 'currency', description: 'Gross Domestic Product (2023)', source: 'IMF' },
  { key: 'gdpPerCapita', name: 'GDP per Capita', unit: 'USD', format: 'currency', description: 'GDP per person (2023)', source: 'IMF' },
  { key: 'hdi', name: 'Human Development Index', unit: '', format: 'decimal3', description: 'HDI value (2022)', source: 'UNDP' },
  { key: 'lifeExpectancy', name: 'Life Expectancy', unit: 'years', format: 'decimal1', description: 'Life expectancy at birth (2022)', source: 'World Bank' },
  { key: 'literacyRate', name: 'Literacy Rate', unit: '%', format: 'decimal1', description: 'Adult literacy rate (2022)', source: 'UNESCO' },
  { key: 'unemploymentRate', name: 'Unemployment Rate', unit: '%', format: 'decimal1', description: 'Unemployment (% of labor force, 2023)', source: 'ILO' },
  { key: 'inflationRate', name: 'Inflation Rate', unit: '%', format: 'decimal1', description: 'Annual inflation (2023)', source: 'IMF' },
  { key: 'co2PerCapita', name: 'CO₂ per Capita', unit: 'metric tons', format: 'decimal2', description: 'CO₂ emissions per person (2022)', source: 'Global Carbon Project' },
  { key: 'internetUsers', name: 'Internet Users', unit: '%', format: 'number', description: 'Population using internet (2022)', source: 'ITU' },
  { key: 'mobileSubscriptions', name: 'Mobile Subscriptions', unit: 'per 100 people', format: 'number', description: 'Mobile cellular subscriptions (2022)', source: 'ITU' },
  { key: 'renewableEnergy', name: 'Renewable Energy', unit: '%', format: 'decimal1', description: 'Renewable electricity share (2022)', source: 'IEA' },
  { key: 'rndExpenditure', name: 'R&D Expenditure', unit: '% of GDP', format: 'decimal2', description: 'Research & development spending (2022)', source: 'UNESCO' },
  { key: 'taxRevenue', name: 'Tax Revenue', unit: '% of GDP', format: 'decimal1', description: 'Tax revenue (2022)', source: 'OECD/IMF' },
  { key: 'governmentDebt', name: 'Government Debt', unit: '% of GDP', format: 'decimal1', description: 'General government gross debt (2023)', source: 'IMF' },
  { key: 'exportGdp', name: 'Exports', unit: '% of GDP', format: 'decimal1', description: 'Exports of goods & services (2023)', source: 'World Bank' },
  { key: 'importGdp', name: 'Imports', unit: '% of GDP', format: 'decimal1', description: 'Imports of goods & services (2023)', source: 'World Bank' },
];

export const regions = [
  'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Middle East'
];

export const sources = {
  'World Bank': 'https://data.worldbank.org',
  'IMF': 'https://www.imf.org/en/Data',
  'UNDP': 'https://hdr.undp.org',
  'UNESCO': 'https://data.uis.unesco.org',
  'ILO': 'https://www.ilo.org/ilostat',
  'ITU': 'https://www.itu.int/en/ITU-D/Statistics',
  'IEA': 'https://www.iea.org/data-and-statistics',
  'OECD': 'https://data.oecd.org',
  'Global Carbon Project': 'https://globalcarbonproject.org'
};