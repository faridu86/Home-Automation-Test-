var authentication = require(`${global.config.root}/app/modules/authentication`);
module.exports.login = async (req, res) => {
  try {
    let user = await authentication.login(req.body.username, req.body.password);
    req.session.apiKey = user.v_api_key;
    res.cookie('x-haa-api-key', user.v_api_key, { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.json(user);
  } catch(err) {
    res.status(401).json({error: err});
  }  
};

module.exports.logout = async (req, res) => {
  try {
    let user = await authentication.logout(req.user.v_api_key);
    delete req.session.apiKey;
    res.cookie('x-haa-api-key', null);
    res.send('logged out');
  } catch(err) {
    res.status(401).json({error: err});
  }
}

module.exports.loggedInUser = (req, res) => {
  res.json(req.user);
}