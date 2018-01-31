'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interest = sequelize.define('Interest', {
    interest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
          is: ["^[a-z]+$",'i'], //hanya nerima huruf
          notEmpty: true
       }
    }
  });

  Interest.associate = (models) => {
    Interest.hasMany(models.user_interest, {
      foreignKey: 'interest_id'
    })
    Interest.hasMany(models.places_interest, {
      foreignKey: 'interest_id'
    })
  }
  return Interest;
};