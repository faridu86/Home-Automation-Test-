if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize');
  var sequelize = null;
  var config = global.config.db;
  var defaultOptions = {
    "host": config.host,
    "port": config.port,
    "dialect": "mysql",
    "dialectOptions": { multipleStatements: true }
  };

  sequelize = new Sequelize(config.database, config.username, config.password, defaultOptions);

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  global.db = {
      Sequelize: Sequelize,
      sequelize: sequelize
  };
}
