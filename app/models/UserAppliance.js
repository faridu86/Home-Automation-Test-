module.exports = function(sequelize, DataTypes) {

  var tableName = "user_appliances";

  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fk_user_id: DataTypes.INTEGER,
    fk_appliance_id: DataTypes.INTEGER,
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