if (!global.hasOwnProperty('db'))
  require(`${global.config.root}/app/config/connect`);

var Sequelize = global.db.Sequelize;
var sequelize = global.db.sequelize;
var models;

global.db = models = {
  User: sequelize.import(__dirname + '/User'),
  Appliance: sequelize.import(__dirname + '/Appliance'),
  UserAppliance: sequelize.import(__dirname + '/UserAppliance')
};

global.db.Sequelize = Sequelize;
global.db.sequelize = sequelize;
global.db.PageSize = 20;
module.exports = global.db;