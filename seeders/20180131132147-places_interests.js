'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('places_interests', [
        {
        places_id: 56,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 57,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 58,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 59,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 60,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 66,
        interest_id: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 61,
        interest_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 62,
        interest_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 63,
        interest_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 64,
        interest_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 81,
        interest_id: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 68,
        interest_id: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 76,
        interest_id: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 77,
        interest_id: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 78,
        interest_id: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 67,
        interest_id: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 69,
        interest_id: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 70,
        interest_id: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 71,
        interest_id: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 72,
        interest_id: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 79,
        interest_id: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 80,
        interest_id: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 82,
        interest_id: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 83,
        interest_id: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 84,
        interest_id: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 73,
        interest_id: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 74,
        interest_id: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 75,
        interest_id: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('places_interests', null, {});

  }
};
