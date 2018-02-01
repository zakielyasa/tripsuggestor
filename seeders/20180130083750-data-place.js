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
        updatedAt: new Date(),
      },
      {
        name: 'Plaza Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Senayan City',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mall Kelapa Gading',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mall of Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gelora Bung Karno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pondok Indah Golf Course',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Waterboom',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Metro Futsal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jakarta Golf Club',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kota Kasablanka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gunung Pancar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mie Abang Adek Jakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pulau Seribu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tanjung Lesung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sea World',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ragunan Zoo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Supernova Esports iCafe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Prima Warnet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rental Ps3 86',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'B.A.T.S. at Shangri-la Hotel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nasi Goreng Kebon Sirih',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nasi Goreng Kebuli Apjay',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Negev Gastronomy & Art',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FLOW Bar & Restaurant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hard Rock Cafe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jenja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Domain Resto and bar',
        createdAt: new Date(),
        updatedAt: new Date(),
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
