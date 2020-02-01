const request = require('request');

module.exports = {
  getChartUrl: (chartConfig = {}) => {
    return new Promise((resolve, reject) => {
      request.post('https://quickchart.io/chart/create', {
        json: { "chart": chartConfig }
      }, (error, res, body) => {
        if (error) {
          reject(error);
        }

        resolve(body.url);
      })
    })
  }
};
