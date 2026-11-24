// Draws a horizontal bar chart as a self-contained SVG: no network, no dependencies,
// and the image never expires. One file per GitHub theme (used with <picture> in the README).
// Rows are zebra-striped. Hover highlight and tooltips only work when the SVG is opened
// on its own (GitHub shows README images as plain <img>, which is not interactive).

const fs = require('fs');
const path = require('path');

const escapeXml = (text) => String(text).replace(/[<>&"']/g, (c) => `&#${c.charCodeAt(0)};`);

// Country flag per region (flag-icons codes). A region missing here simply gets no flag.
const REGION_FLAGS = {
  'us-east-1': 'us', 'us-east-2': 'us', 'us-west-1': 'us', 'us-west-2': 'us', 'us-gov-east-1': 'us', 'us-gov-west-1': 'us',
  'ca-central-1': 'ca', 'ca-west-1': 'ca', 'mx-central-1': 'mx', 'sa-east-1': 'br',
  'cn-north-1': 'cn', 'cn-northwest-1': 'cn',
  'eu-central-1': 'de', 'eu-central-2': 'ch', 'eu-west-1': 'ie', 'eu-west-2': 'gb', 'eu-west-3': 'fr',
  'eu-north-1': 'se', 'eu-south-1': 'it', 'eu-south-2': 'es', 'eusc-de-east-1': 'eu',
  'af-south-1': 'za', 'il-central-1': 'il', 'me-central-1': 'ae', 'me-south-1': 'bh',
  'ap-east-1': 'hk', 'ap-east-2': 'tw', 'ap-northeast-1': 'jp', 'ap-northeast-2': 'kr', 'ap-northeast-3': 'jp',
  'ap-south-1': 'in', 'ap-south-2': 'in', 'ap-southeast-1': 'sg', 'ap-southeast-2': 'au', 'ap-southeast-3': 'id',
  'ap-southeast-4': 'au', 'ap-southeast-5': 'my', 'ap-southeast-6': 'nz', 'ap-southeast-7': 'th',
};

// Each flag once, as a <symbol> the rows can <use>. Flags come from the flag-icons dev dependency.
function flagSymbol(country) {
  try {
    const file = path.join(path.dirname(require.resolve('flag-icons/package.json')), 'flags', '4x3', `${country}.svg`);
    const svg = fs.readFileSync(file, 'utf8');
    const viewBox = (svg.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 640 480';
    const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    return `<symbol id="flag-${country}" viewBox="${viewBox}" preserveAspectRatio="none">${inner}</symbol>`;
  } catch {
    return '';
  }
}

const THEMES = {
  light: { text: '#1f2328', muted: '#59636e', bar: '#0969da', stripe: '#f6f8fa', hover: '#ddf4ff' },
  dark: { text: '#e6edf3', muted: '#9198a1', bar: '#4493f8', stripe: '#151b23', hover: '#1b2b40' },
};

module.exports = {
  THEMES: Object.keys(THEMES),

  // regions: [{ code, name, count }], already sorted; theme: 'light' | 'dark'
  getChartSvg: (regions, theme = 'light') => {
    const c = THEMES[theme];
    const codeX = 12, nameX = 130, barX = 380, barMax = 420, countWidth = 40;
    const rowHeight = 22, barHeight = 16, flagW = 16, flagH = 12;
    const width = barX + barMax + countWidth;
    const height = regions.length * rowHeight;
    const max = Math.max(...regions.map((r) => r.count));

    const symbols = {};
    regions.forEach((r) => {
      const country = REGION_FLAGS[r.code];
      if (country && !(country in symbols)) symbols[country] = flagSymbol(country);
      // the chart still works, just without this flag; add the region to REGION_FLAGS
      if (!country || !symbols[country]) console.warn(`No flag for region ${r.code}; add it to REGION_FLAGS in chart-generator.js`);
    });

    const rows = regions.map((r, i) => {
      const y = i * rowHeight;
      const mid = y + rowHeight / 2;
      const w = Math.max(1, Math.round((r.count / max) * barMax));
      const name = r.name && r.name !== r.code ? r.name : '';
      return `<g class="row${i % 2 ? '' : ' odd'}">`
        + `<title>${escapeXml(r.code)}${name ? ' · ' + escapeXml(name) : ''}: ${r.count} services</title>`
        + `<rect class="bg" x="0" y="${y}" width="${width}" height="${rowHeight}"/>`
        + `<text class="code" x="${codeX}" y="${mid}">${escapeXml(r.code)}</text>`
        + `<text class="name" x="${nameX}" y="${mid}">${escapeXml(name)}</text>`
        + `<rect class="bar" x="${barX}" y="${y + (rowHeight - barHeight) / 2}" width="${w}" height="${barHeight}" rx="2"/>`
        + (symbols[REGION_FLAGS[r.code]]
          ? `<use href="#flag-${REGION_FLAGS[r.code]}" x="${barX + 3}" y="${mid - flagH / 2}" width="${flagW}" height="${flagH}"/>`
          + `<rect class="flag-edge" x="${barX + 3}" y="${mid - flagH / 2}" width="${flagW}" height="${flagH}"/>`
          : '')
        + `<text class="count" x="${barX + w + 6}" y="${mid}">${r.count}</text>`
        + `</g>`;
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
<title>Number of AWS services available in each region</title>
<style>
  text { font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; fill: ${c.text}; dominant-baseline: middle; }
  .code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
  .name, .count { fill: ${c.muted}; }
  .bg { fill: transparent; }
  .odd .bg { fill: ${c.stripe}; }
  .row:hover .bg { fill: ${c.hover}; }
  .bar { fill: ${c.bar}; }
  .flag-edge { fill: none; stroke: rgba(0, 0, 0, 0.2); stroke-width: 0.5; }
</style>
<defs>${Object.values(symbols).join('')}</defs>
${rows.join('\n')}
</svg>
`;
  }
};
