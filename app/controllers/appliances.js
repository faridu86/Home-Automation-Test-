var appliances = require(`${global.config.root}/app/modules/appliances`);

module.exports.appliances = async (req, res) => {
  let data = {};
  data = await appliances.getAppliances(req.params.user_id);
  res.json(data);
};

module.exports.saveConfiguration = async (req, res) => {
  await appliances.saveConfiguration(req.params.user_id, req.body.ids);
  let data = {};
  data = await appliances.getAppliances(req.params.user_id);
  res.json(data);
}

module.exports.saveApplianceControlStatus = async (req, res) => {
  await appliances.saveApplianceControlStatus(req.params.appliance_id, req.body.status);
  let data = {};
  data = await appliances.getAppliances(req.params.user_id);
  res.json(data);
}
