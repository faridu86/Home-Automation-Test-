var appliances = require(`${global.config.root}/app/modules/appliances`);

module.exports.appliances = async (req, res) => {
  let data = {};
  data = await appliances();
  res.json(data);
};
