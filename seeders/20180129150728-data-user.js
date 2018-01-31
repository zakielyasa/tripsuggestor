'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'Valensio Deva',
        username: 'devdots',
        password: 'deva123',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Awtian Akbar',
        username: 'wizawt',
        password: 'awt123',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: ' Fachrizal Gita',
        username: 'cechaajah',
        password: 'cechaganteng',
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
