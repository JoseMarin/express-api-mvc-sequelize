'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('ca', [{
      nombre: "Texas",
      población: 76854,
      superficie: 801707.32
    }, {
      nombre: "New Jersey",
      población: 49791,
      superficie: 521856.65
    }, {
      nombre: "Montana",
      población: 18981,
      superficie: 530659.99
    }, {
      nombre: "Arkansas",
      población: 80795,
      superficie: 935495.68
    }, {
      nombre: "California",
      población: 62056,
      superficie: 332251.8
    }, {
      nombre: "California",
      población: 18242,
      superficie: 225516.29
    }, {
      nombre: "Nevada",
      población: 21494,
      superficie: 455279.79
    }, {
      nombre: "Florida",
      población: 41322,
      superficie: 518681.65
    }, {
      nombre: "Virginia",
      población: 81487,
      superficie: 682342.0
    }, {
      nombre: "District of Columbia",
      población: 13174,
      superficie: 61482.99
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('ca', null, {});
  }
};
