'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('places_interests', [
        {
        places_id: 30,
        interest_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 31,
        interest_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 32,
        interest_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 8,
        interest_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 34,
        interest_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 40,
        interest_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 10,
        interest_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 36,
        interest_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 37,
        interest_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 38,
        interest_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 39,
        interest_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 42,
        interest_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 51,
        interest_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 52,
        interest_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 58,
        interest_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 50,
        interest_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 53,
        interest_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 55,
        interest_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 54,
        interest_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 56,
        interest_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 57,
        interest_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 47,
        interest_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 48,
        interest_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 49,
        interest_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 46,
        interest_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 41,
        interest_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 43,
        interest_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        places_id: 44,
        interest_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('places_interests', null, {});

  }
};
