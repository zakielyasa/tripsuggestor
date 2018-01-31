'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Interests', [{
        interest: 'Shopping',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        interest: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        interest: 'Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        interest: 'Culinary',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        interest: 'Nature',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
