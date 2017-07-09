module.exports = function(sequelize, DataTypes) {

  var tableName = "appliances";

  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    v_name: {type: DataTypes.STRING, allowNull: false},
    v_location: {type: DataTypes.STRING, allowNull: false},
    fk_created_by: DataTypes.INTEGER,
    fk_updated_by: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    updatedAt: DataTypes.INTEGER,
    i_is_active: DataTypes.BOOLEAN
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