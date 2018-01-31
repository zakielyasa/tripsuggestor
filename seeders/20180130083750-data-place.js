'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Places', [
      {
        name: 'Plaza Senayan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Plaza Indonesia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Senayan City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mall Kelapa Gading',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mall of Indonesia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baywalk Pluit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Central Park Mall',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PX Pavilion @ St. Moritz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gandaria City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pondok Indah Mall',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kota Kasablanka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gunung Pancar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pulau Macan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pulau Seribu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tanjung Lesung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ujung Kulon National Park',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Sea World',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Ragunan Zoo',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Ancol',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'B.A.T.S. at Shangri-la Hotel',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Tiga Puluh at Le Meridien Hotel Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Negev Gastronomy & Art',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FLOW Bar & Restaurant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hard Rock Cafe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Molly Malones',
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
