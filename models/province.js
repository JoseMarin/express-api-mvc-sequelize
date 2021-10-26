'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.city, {
        foreignKey: 'provinceId'
      });
      this.belongsTo(models.ca, {
        foreignKey: 'caId'
      });
    }
  };
  province.init({
    nombre: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    poblacion: DataTypes.INTEGER,
    superficie: DataTypes.INTEGER,
    caId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'province',
  });
  return province;
};