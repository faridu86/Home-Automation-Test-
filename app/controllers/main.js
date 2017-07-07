var Promise = require('bluebird');
module.exports.home = Promise.coroutine(function*(req, res) {
  res.render('main');
});