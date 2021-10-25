'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      ca.hasMany(models.provincias, {
        foreignKey: 'provinciaId'
      })
      ca.hasMany(models.localidades, {
        foreignKey: 'localidadId'
      })
    }
  };
  ca.init({
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    superficie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ca',
  });
  return ca;
};