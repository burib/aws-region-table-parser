module.exports = {
  get: function() {
    const promise = new Promise(function(resolve, reject) {
      resolve(require('./data/parseddata.json'));
    });

    return promise;
  }
};
