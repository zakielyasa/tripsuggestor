'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('user_interests', [
      {
        user_id: 17,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 17,
        interest_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 18,
        interest_id: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 18,
        interest_id: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        interest_id: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        interest_id: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        interest_id: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        interest_id: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
