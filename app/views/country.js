// Country Detail View

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function formatNumber(n) {
  if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toLocaleString();
}

function formatValue(val, format) {
  switch (format) {
    case 'currency': return '$' + formatNumber(val);
    case 'decimal1': return val.toFixed(1);
    case 'decimal2': return val.toFixed(2);
    case 'decimal3': return val.toFixed(3);
    default: return formatNumber(val);
  }
}

function getRank(countries, code, key, ascending = false) {
  const sorted = [...countries].sort((a, b) => ascending ? a[key] - b[key] : b[key] - a[key]);
  return sorted.findIndex(c => c.code === code) + 1;
}

export function renderCountry(country, allCountries, indicators, sources) {
  const stats = indicators.map(ind => {
    const val = country[ind.key];
    const rank = getRank(allCountries, country.code, ind.key, ['unemploymentRate', 'inflationRate', 'co2PerCapita', 'governmentDebt'].includes(ind.key));
    const total = allCountries.length;
    return `
      <div class="stat-card">
        <h4>${escape(ind.name)}</h4>
        <div class="stat-value">${formatValue(val, ind.format)}<span class="unit"> ${escape(ind.unit)}</span></div>
        <div class="stat-rank">Rank: ${rank} of ${total}</div>
        <div class="stat-source">Source: ${escape(ind.source)} (${escape(ind.description)})</div>
      </div>
    `;
  }).join('');

  // Calculate percentile for key metrics
  const gdpRank = getRank(allCountries, country.code, 'gdp');
  const hdiRank = getRank(allCountries, country.code, 'hdi');
  const lifeRank = getRank(allCountries, country.code, 'lifeExpectancy');

  return `
    <header>
      <a href="#/" class="back-link">← All Countries</a>
      <h1>${escape(country.name)} <span class="country-code">(${escape(country.code)})</span></h1>
      <p class="region">${escape(country.region)}</p>
    </header>

    <section class="country-summary">
      <div class="summary-grid">
        <div class="summary-item">
          <span class="label">GDP Rank</span>
          <span class="value">#${gdpRank}</span>
        </div>
        <div class="summary-item">
          <span class="label">HDI Rank</span>
          <span class="value">#${hdiRank}</span>
        </div>
        <div class="summary-item">
          <span class="label">Life Expectancy Rank</span>
          <span class="value">#${lifeRank}</span>
        </div>
        <div class="summary-item">
          <span class="label">Population</span>
          <span class="value">${formatNumber(country.population)}</span>
        </div>
      </div>
    </section>

    <section class="statistics-section">
      <h2>All Indicators</h2>
      <div class="stats-grid">
        ${stats}
      </div>
    </section>

    <section class="actions-section">
      <a href="#/compare" class="btn-secondary">Compare with Other Countries</a>
      <a href="#/indicator/gdp" class="btn-secondary">View Indicator Rankings</a>
    </section>

    <footer>
      <p>Data sources: ${Object.entries(sources).map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${escape(k)}</a>`).join(', ')}</p>
      <p><a href="#/about">About this site</a></p>
    </footer>
  `;
}