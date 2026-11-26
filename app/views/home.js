// Home View - Country grid with region filter and indicator cards

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function formatNumber(n) {
  if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toLocaleString();
}

export function renderHome(countries, regions, indicators) {
  const regionOptions = regions.map(r => `<option value="${r}">${r}</option>`).join('');

  return `
    <header>
      <h1>National Statistics</h1>
      <p class="subtitle">Explore and compare key statistics for countries worldwide</p>
    </header>

    <section class="search-section">
      <label for="region-filter">Filter by Region:</label>
      <select id="region-filter">
        <option value="">All Regions</option>
        ${regionOptions}
      </select>
    </section>

    <section class="countries-section">
      <h2>Countries (${countries.length})</h2>
      <div id="countries-grid" class="countries-grid">
        ${countries.map(c => `
          <article class="country-card" data-code="${c.code}" tabindex="0" role="button">
            <h3>${escape(c.name)}</h3>
            <p class="region">${escape(c.region)}</p>
            <div class="stats">
              <span>${formatNumber(c.population)} people</span>
              <span>$${formatNumber(Math.round(c.gdpPerCapita))}/capita</span>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="indicators-section">
      <h2>Key Indicators</h2>
      <p class="section-desc">Click an indicator to see rankings across all countries</p>
      <div class="indicators-grid">
        ${indicators.map(ind => `
          <article class="indicator-card" data-key="${ind.key}" tabindex="0" role="button">
            <h3>${escape(ind.name)}</h3>
            <p>${escape(ind.description)}</p>
            <span class="source">Source: ${escape(ind.source)}</span>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="compare-section">
      <button id="compare-btn" class="btn-primary">Compare Countries →</button>
    </section>

    <footer>
      <p>Data sources: World Bank, IMF, UN, OECD, IEA, UNESCO, ITU, Global Carbon Project</p>
      <p><a href="#/about">About this site</a></p>
    </footer>
  `;
}