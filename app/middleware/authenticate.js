let getApiKey = (req) => {
  let apiKey;
  if(req.session.apiKey) {
    apiKey = req.session.apiKey;
  }
  return apiKey;
}
module.exports = async (req, res, next) => {
  let apiKey = getApiKey(req);
  if (!apiKey) {
    res.status(401).end(); return;
  }
  let user = await global.db.User.find({
    where: {
      v_api_key: apiKey
    }
  });
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).end(); return;
  }
}