// About View

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function renderAbout(sources) {
  return `
    <header>
      <a href="#/" class="back-link">← Home</a>
      <h1>About National Statistics</h1>
    </header>

    <section class="about-section">
      <h2>Purpose</h2>
      <p>This site provides a comprehensive, easy-to-use interface for exploring national statistics across countries worldwide. It aims to make key economic, social, and environmental indicators accessible to researchers, students, policymakers, and curious minds.</p>
    </section>

    <section class="about-section">
      <h2>Data Sources</h2>
      <p>All data comes from reputable international organizations. Each indicator cites its specific source and year.</p>
      <ul class="sources-list">
        ${Object.entries(sources).map(([name, url]) => `
          <li><a href="${url}" target="_blank" rel="noopener">${escape(name)}</a></li>
        `).join('')}
      </ul>
    </section>

    <section class="about-section">
      <h2>Features</h2>
      <ul class="features-list">
        <li><strong>Country Profiles:</strong> Detailed statistics for 20 major economies</li>
        <li><strong>Indicator Rankings:</strong> Sort and compare countries on any indicator</li>
        <li><strong>Side-by-Side Comparison:</strong> Visual charts comparing up to 6 countries</li>
        <li><strong>Responsive Design:</strong> Works on desktop and mobile devices</li>
        <li><strong>No External Dependencies:</strong> All code and data self-contained</li>
        <li><strong>Offline Capable:</strong> No network requests after initial load</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>Technical Details</h2>
      <ul class="features-list">
        <li>Vanilla JavaScript (ES Modules)</li>
        <li>CSS Grid & Flexbox for layout</li>
        <li>Canvas API for charts</li>
        <li>Hash-based routing (no server needed)</li>
        <li>~15 KB total (HTML + CSS + JS + Data)</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>Methodology Notes</h2>
      <ul class="features-list">
        <li>Data reflects latest available year (2022-2023)</li>
        <li>Rankings: higher values rank #1 except for unemployment, inflation, CO₂, and debt (lower is better)</li>
        <li>Missing data points excluded from rankings</li>
        <li>Regional classifications follow World Bank groupings</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>License & Attribution</h2>
      <p>This site is open source under the MIT License. Data belongs to respective source organizations.</p>
      <p>Built for the make.fun "Best National Statistics Site" bounty.</p>
    </section>

    <footer>
      <p><a href="#/">← Back to Home</a></p>
    </footer>
  `;
}