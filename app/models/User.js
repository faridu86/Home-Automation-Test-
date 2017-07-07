var Puid = require('puid');
var moment = require('moment');

module.exports = function(sequelize, DataTypes) {

  var tableName = "users";

  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    v_username: {type: DataTypes.STRING, allowNull: false},
    v_password: {type: DataTypes.STRING, allowNull: false},
    v_full_name: {type: DataTypes.STRING, allowNull: false},
    v_api_key: {type: DataTypes.STRING, allowNull: true},
    fk_created_by: DataTypes.INTEGER,
    fk_updated_by: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    updatedAt: DataTypes.INTEGER
  };

  var instanceMethods = {};
  var classMethods = {};
  var getterMethods = {};
  var setterMethods = {};
  var scopes = {};

  return sequelize.define(tableName, attributes, {
    instanceMethods: instanceMethods, 
    classMethods: classMethods,
    getterMethods: getterMethods,
    setterMethods: setterMethods,
    scopes: scopes
  });
};