'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provincias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movie.belongsTo(models.ca, {
        foreignKey: 'caId'
      });
    }
  };
  provincias.init({
    cp: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    superficie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'provincias',
  });
  return provincias;
};