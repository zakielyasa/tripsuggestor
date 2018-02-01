'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_places', [
      {
        user_id: 17,
        places_id: 56,
        rating: 8,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 17,
        places_id: 57,
        rating: 6,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 17,
        places_id: 61,
        rating: 9,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 18,
        places_id: 81,
        rating: 7,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 18,
        places_id: 75,
        rating: 7,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        places_id: 77,
        rating: 9,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        places_id: 71,
        rating: 10,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        places_id: 68,
        rating: 5,
        review: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        places_id: 80,
        rating: 7,
        review: '',
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
