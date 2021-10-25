'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('provincia', [

{nombre:"Derek",cp:"611 24", poblacion:205,superficie:3839,fk_CA:11},
{nombre:"Mandie",cp:"611 24",poblacion:244,superficie:9399,fk_CA:3},
{nombre: "Claudell",cp:"611 24",nombre:"Dall",poblacion:234,superficie:8129,fk_CA:20},
{nombre: "Fabiano", cp:"06182 CEDEX 2",poblacion:425,superficie:3569,fk_CA:8},
{nombre: "Jayme", cp:"61150",nombre:"Irina",poblacion:728,superficie:6266,fk_CA:10},
{nombre : "Gladys", cp:"29560-000",poblacion:332,superficie:4159,fk_CA:10},
{nombre:"Magdalena",cp:"61351 24",poblacion:701,superficie:7876,fk_CA:2},
{nombre:"Emmery",cp:"61424",poblacion:415,superficie:7155,fk_CA:12},
{nombre:"Gaby",cp:"613424",poblacion:682,superficie:1970,fk_CA:19},
{nombre:"Cornie",cp:"2213",poblacion:221,superficie:2545,fk_CA:19},

      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
