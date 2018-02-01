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
        interest: 'Shopping'
      },
      {
        name: 'Plaza Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Shopping'
      },
      {
        name: 'Senayan City',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Shopping'
      },
      {
        name: 'Mall Kelapa Gading',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Shopping'
      },
      {
        name: 'Mall of Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Shopping'
      },
      {
        name: 'Gelora Bung Karno',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Sports'
      },
      {
        name: 'Pondok Indah Golf Course',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Sports'
      },
      {
        name: 'Waterboom',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Sports'
      },
      {
        name: 'Metro Futsal',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Sports'
      },
      {
        name: 'Jakarta Golf Club',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Sports'
      },
      {
        name: 'Kota Kasablanka',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Shopping'
      },
      {
        name: 'Gunung Pancar',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nature'
      },
      {
        name: 'Mie Abang Adek Jakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Culinary'
      },
      {
        name: 'Pulau Seribu',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nature'
      },
      {
        name: 'Tanjung Lesung',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nature'
      },
      {
        name: 'Sea World',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Education'
      },
      {
        name: 'Ragunan Zoo',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Education'
      },
      {
        name: 'Supernova Esports iCafe',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Gaming'
      },
      {
        name: 'Prima Warnet',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Gaming'
      },
      {
        name: 'Rental Ps3 86',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Gaming'
      },

      {
        name: 'B.A.T.S. at Shangri-la Hotel',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Culinary'
      },

      {
        name: 'Nasi Goreng Kebon Sirih',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Culinary'
      },
      {
        name: 'Nasi Goreng Kebuli Apjay',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Culinary'
      },
      {
        name: 'Negev Gastronomy & Art',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Education'
      },
      {
        name: 'FLOW Bar & Restaurant',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nightlife'
      },
      {
        name: 'Hard Rock Cafe',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Music'
      },
      {
        name: 'Fable',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nightlife'
      },
      {
        name: 'Jenja',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nightlife'
      },
      {
        name: 'Domain Resto and bar',
        createdAt: new Date(),
        updatedAt: new Date(),
        interest: 'Nightlife'
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
