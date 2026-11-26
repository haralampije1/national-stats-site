// Compare Countries View

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

export function renderCompare(countries, indicators, selectedCountries, currentIndicator) {
  const indicator = indicators.find(i => i.key === currentIndicator);
  const indicatorOptions = indicators.map(i => `<option value="${i.key}">${escape(i.name)}</option>`).join('');

  const countryOptions = countries.map(c => {
    const isSelected = selectedCountries.includes(c.code);
    return `<button class="country-select-option ${isSelected ? 'selected' : ''}" data-code="${c.code}" ${isSelected ? 'aria-pressed="true"' : 'aria-pressed="false"'}>
      ${escape(c.name)} (${escape(c.code)})
    </button>`;
  }).join('');

  const selectedHtml = selectedCountries.length > 0 ? selectedCountries.map(code => {
    const c = countries.find(x => x.code === code);
    return c ? `
      <div class="selected-country">
        <span>${escape(c.name)}</span>
        <span class="value">${formatValue(c[currentIndicator], indicator.format)} ${escape(indicator.unit)}</span>
      </div>
    ` : '';
  }).join('') : '<p class="no-selection">Select up to 6 countries to compare</p>';

  return `
    <header>
      <a href="#/" class="back-link">← Home</a>
      <h1>Compare Countries</h1>
    </header>

    <section class="compare-controls">
      <div class="control-group">
        <label for="compare-indicator">Indicator:</label>
        <select id="compare-indicator">
          ${indicatorOptions}
        </select>
      </div>

      <div class="control-group">
        <label>Chart Type:</label>
        <div class="chart-type-toggle">
          <button class="chart-type-btn active" data-type="bar" aria-pressed="true">Bar Chart</button>
          <button class="chart-type-btn" data-type="line" aria-pressed="false">Line Chart</button>
        </div>
      </div>
    </section>

    <section class="country-selector">
      <h2>Select Countries (max 6)</h2>
      <div class="selected-countries">
        ${selectedHtml}
      </div>
      <div class="country-options">
        ${countryOptions}
      </div>
    </section>

    <section class="chart-section">
      <h2>${escape(indicator.name)} Comparison</h2>
      <canvas id="compare-chart" width="800" height="400" aria-label="${escape(indicator.name)} comparison chart"></canvas>
      <p class="chart-note">Click countries to add/remove. Drag to reorder in selection.</p>
    </section>

    <section class="data-table-section">
      <h2>Detailed Data</h2>
      <table class="data-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>${escape(indicator.name)}</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          ${countries.map((c, i) => {
            const sorted = [...countries].sort((a, b) => {
              const asc = ['unemploymentRate', 'inflationRate', 'co2PerCapita', 'governmentDebt'].includes(currentIndicator);
              return asc ? a[currentIndicator] - b[currentIndicator] : b[currentIndicator] - a[currentIndicator];
            });
            const rank = sorted.findIndex(x => x.code === c.code) + 1;
            return `
              <tr class="${selectedCountries.includes(c.code) ? 'selected' : ''}" data-code="${c.code}">
                <td>${escape(c.name)}</td>
                <td>${formatValue(c[currentIndicator], indicator.format)} ${escape(indicator.unit)}</td>
                <td>#${rank}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </section>

    <footer>
      <p>Data source: ${escape(indicator.source)}</p>
      <p><a href="#/about">About this site</a></p>
    </footer>
  `;
}