'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provincia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    //  */
    static associate(models) {
      this.hasMany(models.localidad, {
        foreignKey: 'localidadId'
      });
      this.belongsTo(models.ca, {
        foreignKey: 'caId'
      });
    }
  };
  provincia.init({
    cp: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    superficie: DataTypes.INTEGER,
    caId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'provincia'
  }, {
  tableName: 'provincias' 
}); 
  return provincia;
};