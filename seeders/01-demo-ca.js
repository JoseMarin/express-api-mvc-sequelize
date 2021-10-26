'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('cas', [{
      nombre: "Texas",
      poblacion: 76854,
      superficie: 801707.32,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "New Jersey",
      poblacion: 49791,
      superficie: 521856.65,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Montana",
      poblacion: 18981,
      superficie: 530659.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Arkansas",
      poblacion: 80795,
      superficie: 935495.68,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "California",
      poblacion: 62056,
      superficie: 332251.8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "California",
      poblacion: 18242,
      superficie: 225516.29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Nevada",
      poblacion: 21494,
      superficie: 455279.79,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Florida",
      poblacion: 41322,
      superficie: 518681.65,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Virginia",
      poblacion: 81487,
      superficie: 682342.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "District of Columbia",
      poblacion: 13174,
      superficie: 61482.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('cas', null, {});

  }
};
