'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('cities', [{
      nombre: "Thị Trấn Cẩm Thủy",
      poblacion: 1706,
      capital_pro: false,
      capital_ca: false,
      provinceId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Az Zuwaytīnah",
      poblacion: 6122,
      capital_pro: true,
      capital_ca: true,
      provinceId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Sumberkemuning",
      poblacion: 9580,
      capital_pro: true,
      capital_ca: false,
      provinceId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Seixal",
      poblacion: 4315,
      capital_pro: false,
      capital_ca: false,
      provinceId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Stanisław Dolny",
      poblacion: 1503,
      cp: 34143,
      capital_pro: true,
      capital_ca: false,
      provinceId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Chengbei",
      poblacion: 1998,
      capital_pro: true,
      capital_ca: true,
      provinceId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Shatrovo",
      poblacion: 3854,
      cp: 641960,
      capital_pro: true,
      capital_ca: true,
      provinceId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Créteil",
      poblacion: 9945,
      cp: 9402,
      capital_pro: false,
      capital_ca: true,
      provinceId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Yerba Buena",
      poblacion: 8554,
      cp: 4622,
      capital_pro: true,
      capital_ca: false,
      provinceId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Fujia",
      poblacion: 2819,
      capital_pro: true,
      capital_ca: true,
      provinceId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('cities', null, {});

  }
};
