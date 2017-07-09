var authenticate = require(`${global.config.root}/app/middleware/authenticate`);
var controllers = require(`${global.config.root}/app/controllers`);
module.exports = function (app) {
  app.get('/', controllers.main.home);

  app.post('/login', controllers.users.login);
  app.put('/logout', authenticate, controllers.users.logout);
  app.get('/authenticate', authenticate, controllers.users.loggedInUser);
  app.get('/appliances/:user_id', controllers.appliances.appliances);
}
