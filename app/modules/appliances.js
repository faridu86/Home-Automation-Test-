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
    console.log(`\n\n${config}\n\n`)
    newConfiguration.push(config);
  });
  console.log(`\n\n${newConfiguration}\n\n`)
  await Models.UserAppliance.bulkCreate(newConfiguration);
}

let saveControl = () => {

}

module.exports = {
  getAppliances: getAppliances,
  saveConfiguration: saveConfiguration,
  saveControl: saveControl

}