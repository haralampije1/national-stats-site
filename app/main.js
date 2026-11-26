// National Statistics Site - Main Router
// Handles hash-based routing: #/, #/country/USA, #/compare, #/indicator/gdp

import { countries, indicators, regions, sources } from './data.js';
import { renderHome } from './views/home.js';
import { renderCountry } from './views/country.js';
import { renderCompare } from './views/compare.js';
import { renderIndicator } from './views/indicator.js';
import { renderAbout } from './views/about.js';

const app = document.getElementById('app');
let currentIndicator = 'gdp';
let selectedCountries = [];

function getCountry(code) {
  return countries.find(c => c.code === code);
}

function render() {
  window.__shotReady = false;
  const hash = location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(p => p);

  if (parts[0] === 'country' && parts[1]) {
    const country = getCountry(parts[1].toUpperCase());
    document.title = country ? `${country.name} | National Statistics` : 'Not Found | National Statistics';
    app.innerHTML = country ? renderCountry(country, countries, indicators, sources) : renderNotFound();
  } else if (parts[0] === 'compare') {
    document.title = 'Compare Countries | National Statistics';
    app.innerHTML = renderCompare(countries, indicators, selectedCountries, currentIndicator);
    setupCompareListeners();
  } else if (parts[0] === 'indicator' && parts[1]) {
    const indicator = indicators.find(i => i.key === parts[1]);
    currentIndicator = parts[1];
    document.title = indicator ? `${indicator.name} | National Statistics` : 'Not Found | National Statistics';
    app.innerHTML = indicator ? renderIndicator(indicator, countries, sources) : renderNotFound();
    setupIndicatorListeners();
  } else if (parts[0] === 'about') {
    document.title = 'About | National Statistics';
    app.innerHTML = renderAbout(sources);
  } else {
    document.title = 'National Statistics';
    app.innerHTML = renderHome(countries, regions, indicators);
    setupHomeListeners();
  }

  window.scrollTo(0, 0);
  window.__shotReady = true;
}

function setupHomeListeners() {
  // Country cards click
  document.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => {
      location.hash = `#/country/${card.dataset.code}`;
    });
  });

  // Region filter
  const regionSelect = document.getElementById('region-filter');
  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      const region = e.target.value;
      const filtered = region ? countries.filter(c => c.region === region) : countries;
      document.getElementById('countries-grid').innerHTML = filtered.map(c => `
        <article class="country-card" data-code="${c.code}" tabindex="0" role="button">
          <h3>${c.name}</h3>
          <p class="region">${c.region}</p>
          <div class="stats">
            <span>${formatNumber(c.population)} people</span>
            <span>$${formatNumber(Math.round(c.gdpPerCapita))}/capita</span>
          </div>
        </article>
      `).join('');
      setupHomeListeners();
    });
  }

  // Indicator cards click
  document.querySelectorAll('.indicator-card').forEach(card => {
    card.addEventListener('click', () => {
      location.hash = `#/indicator/${card.dataset.key}`;
    });
  });

  // Compare button
  const compareBtn = document.getElementById('compare-btn');
  if (compareBtn) {
    compareBtn.addEventListener('click', () => {
      location.hash = '#/compare';
    });
  }
}

function setupCompareListeners() {
  // Country selection
  document.querySelectorAll('.country-select-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const code = opt.dataset.code;
      const idx = selectedCountries.indexOf(code);
      if (idx === -1 && selectedCountries.length < 6) {
        selectedCountries.push(code);
      } else if (idx !== -1) {
        selectedCountries.splice(idx, 1);
      }
      location.hash = '#/compare';
    });
  });

  // Indicator selector
  const indicatorSelect = document.getElementById('compare-indicator');
  if (indicatorSelect) {
    indicatorSelect.value = currentIndicator;
    indicatorSelect.addEventListener('change', (e) => {
      currentIndicator = e.target.value;
      location.hash = '#/compare';
    });
  }

  // Chart type toggle
  document.querySelectorAll('.chart-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      drawCompareChart();
    });
  });

  drawCompareChart();
}

function setupIndicatorListeners() {
  // Country click in indicator view
  document.querySelectorAll('.indicator-row').forEach(row => {
    row.addEventListener('click', () => {
      location.hash = `#/country/${row.dataset.code}`;
    });
  });
}

function drawCompareChart() {
  const canvas = document.getElementById('compare-chart');
  if (!canvas || selectedCountries.length === 0) return;

  const ctx = canvas.getContext('2d');
  const indicator = indicators.find(i => i.key === currentIndicator);
  const activeType = document.querySelector('.chart-type-btn.active')?.dataset.type || 'bar';

  const data = selectedCountries.map(code => {
    const country = getCountry(code);
    return { code, name: country.name, value: country[currentIndicator] };
  }).sort((a, b) => b.value - a.value);

  const maxVal = Math.max(...data.map(d => d.value));
  const padding = 40;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw axes
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, canvas.height - padding);
  ctx.stroke();

  // Draw bars/lines
  const barWidth = chartWidth / data.length * 0.7;
  const spacing = chartWidth / data.length;

  data.forEach((d, i) => {
    const x = padding + i * spacing + spacing * 0.15;
    const barHeight = (d.value / maxVal) * chartHeight;
    const y = canvas.height - padding - barHeight;

    const hue = 210 - (i * 30);
    ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;

    if (activeType === 'bar') {
      ctx.fillRect(x, y, barWidth, barHeight);
    } else {
      // Line chart points
      ctx.beginPath();
      ctx.arc(x + barWidth/2, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Country label
    ctx.fillStyle = '#333';
    ctx.font = '11px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(d.code, x + barWidth/2, canvas.height - padding + 20);

    // Value label
    ctx.fillText(formatValue(d.value, indicator), x + barWidth/2, y - 5);
  });

  // Title
  ctx.fillStyle = '#333';
  ctx.font = 'bold 14px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText(`${indicator.name} Comparison`, canvas.width / 2, 25);
}

function formatNumber(n) {
  if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toLocaleString();
}

function formatValue(val, indicator) {
  if (!indicator) return val.toLocaleString();
  switch (indicator.format) {
    case 'currency': return '$' + formatNumber(val);
    case 'decimal1': return val.toFixed(1);
    case 'decimal2': return val.toFixed(2);
    case 'decimal3': return val.toFixed(3);
    default: return val.toLocaleString();
  }
}

function renderNotFound() {
  return `<div class="not-found">
    <h1>Not Found</h1>
    <p>The requested page does not exist.</p>
    <a href="#/">← Back to Home</a>
  </div>`;
}

window.addEventListener('hashchange', render);
render();