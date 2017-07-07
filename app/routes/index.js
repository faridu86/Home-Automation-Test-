var Promise = require('bluebird');
var controllers = require(`${global.config.root}/controllers`);
module.exports = function (app) {
  app.get('/', controllers.main.home);
}
