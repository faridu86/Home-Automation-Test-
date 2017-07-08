var Promise = require('bluebird');
var moment = require("moment");
var Puid = require('puid');
let authentication = () => {
  let login = async (username, password) => {
    try {
      let user = await global.db.User.find({
        where: {v_username: username, v_password: password},
        attributes: ['id', 'v_username', 'v_password', 'v_full_name', 'v_api_key']
      });
      if(user) {
        var puid = new Puid();
        user.v_api_key = puid.generate();
        return user.save();
      }
      throw('Invalid username or password');
    } catch (error) {
      throw(error);
    }
  }

  let logout = async (apiKey) => {
    try {
      let user = await global.db.User.find({
        where: {v_api_key: apiKey},
        attributes: ['id', 'v_username', 'v_password', 'v_full_name', 'v_api_key']
      });
      if(user) {
        user.v_api_key = "";
        return user.save();
      }
      throw('Invalid apiKey');
    } catch (error) {
      throw(error);
    }
  };

  let isLoggedIn = async (apiKey) => {

  }
  return {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn
  }
};

module.exports = authentication();