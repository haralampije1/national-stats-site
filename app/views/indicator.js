// Indicator Ranking View

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

export function renderIndicator(indicator, countries, sources) {
  const ascending = ['unemploymentRate', 'inflationRate', 'co2PerCapita', 'governmentDebt'].includes(indicator.key);
  const sorted = [...countries].sort((a, b) => ascending ? a[indicator.key] - b[indicator.key] : b[indicator.key] - a[indicator.key]);

  const rows = sorted.map((c, i) => `
    <tr class="indicator-row" data-code="${c.code}" tabindex="0" role="button">
      <td class="rank">#${i + 1}</td>
      <td class="country">${escape(c.name)} <span class="code">(${escape(c.code)})</span></td>
      <td class="value">${formatValue(c[indicator.key], indicator.format)} <span class="unit">${escape(indicator.unit)}</span></td>
      <td class="region">${escape(c.region)}</td>
    </tr>
  `).join('');

  const indicatorOptions = [
    { key: 'gdp', name: 'GDP' },
    { key: 'gdpPerCapita', name: 'GDP per Capita' },
    { key: 'population', name: 'Population' },
    { key: 'hdi', name: 'HDI' },
    { key: 'lifeExpectancy', name: 'Life Expectancy' },
    { key: 'co2PerCapita', name: 'CO₂ per Capita' },
    { key: 'renewableEnergy', name: 'Renewable Energy %' },
    { key: 'unemploymentRate', name: 'Unemployment Rate' },
    { key: 'inflationRate', name: 'Inflation Rate' },
    { key: 'internetUsers', name: 'Internet Users %' },
    { key: 'rndExpenditure', name: 'R&D Expenditure %' },
    { key: 'governmentDebt', name: 'Gov Debt % GDP' },
  ].map(opt => `<option value="${opt.key}" ${opt.key === indicator.key ? 'selected' : ''}>${escape(opt.name)}</option>`).join('');

  return `
    <header>
      <a href="#/" class="back-link">← Home</a>
      <h1>${escape(indicator.name)}</h1>
      <p class="indicator-desc">${escape(indicator.description)}</p>
    </header>

    <section class="indicator-selector">
      <label for="indicator-select">Switch Indicator:</label>
      <select id="indicator-select">
        ${indicatorOptions}
      </select>
    </section>

    <section class="ranking-table-section">
      <table class="ranking-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
            <th>${escape(indicator.name)}</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>

    <section class="indicator-meta">
      <h3>About this Indicator</h3>
      <dl>
        <dt>Source</dt><dd><a href="${sources[indicator.source] || '#'}" target="_blank" rel="noopener">${escape(indicator.source)}</a></dd>
        <dt>Unit</dt><dd>${escape(indicator.unit)}</dd>
        <dt>Description</dt><dd>${escape(indicator.description)}</dd>
        <dt>Sort Order</dt><dd>${ascending ? 'Lowest is best (rank 1)' : 'Highest is best (rank 1)'}</dd>
      </dl>
    </section>

    <footer>
      <p>Data source: ${escape(indicator.source)}</p>
      <p><a href="#/about">About this site</a></p>
    </footer>
  `;
}