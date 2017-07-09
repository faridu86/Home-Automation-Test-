let _ = require("underscore");
let Models = global.db;

let appliances = async (userId) => {
  let options = () => {
    let options = _.clone(require(global.config.root + '/app/config/appliances.json'));
    return options;
  };

  let all = async () => {
    let appliances = await Models.Appliance.findAll();
    return _.indexBy(appliances, 'id');
  };

  let userAppliances = async (id) => {
    let userAppliances = await Models.UserAppliance.findAll({
      where: {
        fk_user_id: id
      }
    });
    return userAppliances;
  };

  return {
    options: options(),
    appliances: await all(),
    userAppliances: await userAppliances(userId)
  }
};

module.exports = appliances;