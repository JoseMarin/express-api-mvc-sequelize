'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('provinces', [{
      nombre: "Derek",
      cp: "61124",
      poblacion: 205,
      superficie: 3839,
      caId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Mandie",
      cp: "61424",
      poblacion: 244,
      superficie: 9399,
      caId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Claudell",
      cp: "61934",
      poblacion: 234,
      superficie: 8129,
      caId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Fabiano",
      cp: "0645",
      poblacion: 425,
      superficie: 3569,
      caId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Jayme",
      cp: "61150",
      poblacion: 728,
      superficie: 6266,
      caId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Gladys",
      cp: "29560",
      poblacion: 332,
      superficie: 4159,
      caId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Magdalena",
      cp: "61351",
      poblacion: 701,
      superficie: 7876,
      caId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Emmery",
      cp: "61424",
      poblacion: 415,
      superficie: 7155,
      caId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Gaby",
      cp: "613424",
      poblacion: 682,
      superficie: 1970,
      caId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: "Cornie",
      cp: "2213",
      poblacion: 221,
      superficie: 2545,
      caId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('provinces', null, {});

  }
};
