var appliances = require(`${global.config.root}/app/modules/appliances`);

module.exports.appliances = async (req, res) => {
  console.log(`\n\n appliances ${req.params.user_id} \n\n ${JSON.stringify(appliances)}\n\n`);
  let data = {};
  data = await appliances();
  res.json(data);
};
