const jsdom = require('jsdom');
const { JSDOM } = jsdom;
//const fetch = require('node-fetch');  // Make sure to install if not already present

module.exports = {
  get: function() {
    const promise = new Promise(function(resolve, reject) {
      resolve(require('./data/service_info.json'));
    });

    return promise;
  },

  getRegionCodeToNameMap: function() {
    return new Promise(async function(resolve, reject) {
        const regionCodeToNameMap = {};
        try {
            const htmlContent = await fetch('https://docs.aws.amazon.com/general/latest/gr/rande.html').then(res => res.text());
            const dom = new JSDOM(htmlContent);
            const doc = dom.window.document;
            const table = doc.querySelector('.table-container');

            if (table) {
                const rows = table.querySelectorAll('tr');
                rows.forEach(row => {
                    const columns = row.querySelectorAll('td');
                    if (columns.length >= 2) {
                        const regionName = columns[0].textContent.trim();
                        const regionCode = columns[1].textContent.trim();
                        regionCodeToNameMap[regionCode] = regionName;
                    }
                });
            }

            resolve(regionCodeToNameMap);
        } catch (error) {
            reject(error);
        }
    });
  }
};