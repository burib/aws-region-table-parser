const url = 'http://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/';
const parser = require('./aws-region-table-parser.js');
const request = require('request');

module.exports = {
  get: function() {
    const promise = new Promise(function(resolve, reject) {
      request(url, function(error, responseStatus, html) {
        if (!error) {
          resolve(parser(html));
        } else {
          reject(error);
        }
      });
    });

    return promise;
  },
  getCachedData: function () {
    return require('./data/parseddata.json')
  } 
};