let _ = require("underscore");
let Models = global.db;

let getAppliances = async (userId) => {
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
    all: await all(),
    userAppliances: await userAppliances(userId)
  }
};

let saveConfiguration = async (userId, appliancesIds) => {
  await Models.UserAppliance.destroy({
    where: {
      fk_user_id: userId
    }
  });

  let newConfiguration = [];
  _.each(appliancesIds, (id) => {
    let config = {
      fk_user_id: userId,
      fk_appliance_id: id,
      fk_created_by: userId,
      fk_updated_by: userId
    };
    newConfiguration.push(config);
  });
  await Models.UserAppliance.bulkCreate(newConfiguration);
}

let saveApplianceControlStatus = async (applianceId, status) => {
  let appliance = await Models.Appliance.find({
    where: {
      id: applianceId
    }
  });
  appliance.t_status = status;
  return appliance.save();
}

module.exports = {
  getAppliances: getAppliances,
  saveConfiguration: saveConfiguration,
  saveApplianceControlStatus: saveApplianceControlStatus

}