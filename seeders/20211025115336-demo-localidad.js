'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('localidads', [{
      nombre: "Thị Trấn Cẩm Thủy",
      poblacion: 1706,
      capital_pro: false,
      capital_ca: false,
      provinciaId: 8
    }, {
      nombre: "Az Zuwaytīnah",
      poblacion: 6122,
      capital_pro: true,
      capital_ca: true,
      provinciaId: 10
    }, {
      nombre: "Sumberkemuning",
      poblacion: 9580,
      capital_pro: true,
      capital_ca: false,
      provinciaId: 8
    }, {
      nombre: "Seixal",
      poblacion: 4315,
      cp: "2840-466",
      capital_pro: false,
      capital_ca: false,
      provinciaId: 8
    }, {
      nombre: "Stanisław Dolny",
      poblacion: 1503,
      cp: "34-143",
      capital_pro: true,
      capital_ca: false,
      provinciaId: 7
    }, {
      nombre: "Chengbei",
      poblacion: 1998,
      capital_pro: true,
      capital_ca: true,
      provinciaId: 9
    }, {
      nombre: "Shatrovo",
      poblacion: 3854,
      cp: "641960",
      capital_pro: true,
      capital_ca: true,
      provinciaId: 8
    }, {
      nombre: "Créteil",
      poblacion: 9945,
      cp: "94024 CEDEX",
      capital_pro: false,
      capital_ca: true,
      provinciaId: 7
    }, {
      nombre: "Yerba Buena",
      poblacion: 8554,
      cp: "4622",
      capital_pro: true,
      capital_ca: false,
      provinciaId: 3
    }, {
      nombre: "Fujia",
      poblacion: 2819,
      capital_pro: true,
      capital_ca: true,
      provinciaId: 12
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('localidads', null, {});

  }
};
