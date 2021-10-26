'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.province, {
        foreignKey: 'provinceId'
      });
    }
  };
  city.init({
    nombre: DataTypes.STRING,
    poblacion: DataTypes.INTEGER,
    cp: DataTypes.INTEGER,
    capital_pro: DataTypes.BOOLEAN,
    capital_ca: DataTypes.BOOLEAN,
    provinceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};