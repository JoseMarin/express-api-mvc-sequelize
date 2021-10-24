'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('movies', [{
        title : "Train to Busan",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Shaun of the dead",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "ZombieLand",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 2",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 3",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "28 Days Later",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Zombiever",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Overlord",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Black Sheep",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('movies', null, {});
     
  }
};
