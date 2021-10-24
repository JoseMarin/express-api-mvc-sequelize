'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', [{
        type: 'zombies',
        age: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'horror',
        age: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'action',
        age: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'drama',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'fantasy',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'mystery',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'romance',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'thriller',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'comedy',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
