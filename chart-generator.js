const request = require('request');

module.exports = {
  getChartUrl: (chartConfig = {}, height = 600) => { // Added height parameter
    return new Promise((resolve, reject) => {
      request.post('https://quickchart.io/chart/create', {
        json: { 
            "chart": chartConfig,
            "width": 600,
            "height": height
        }
      }, (error, res, body) => {
        if (error || !body.url) {
          reject(error || new Error('Failed to get URL'));
        }
        resolve(body.url);
      })
    })
  }
}
