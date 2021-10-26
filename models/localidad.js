'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.provincia, {
        foreignKey: 'provinciaId'
      });
    }
  };
  localidad.init({
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    capital_pro: DataTypes.BOOLEAN,
    capital_ca: DataTypes.BOOLEAN,
    provinciaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'localidad'
  },{
    tableName: 'localidads' 
  });
  return localidad;
};