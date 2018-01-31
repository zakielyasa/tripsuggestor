'use strict';
module.exports = (sequelize, DataTypes) => {
  var Places = sequelize.define('Places', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
          is: ["^[a-z]+$",'i'], //hanya nerima huruf
          notEmpty: true
       }
    }
  });

  Places.associate = (models) => {
    Places.hasMany(models.places_interest, {
      foreignKey: 'places_id'
    })
    Places.hasMany(models.user_places, {
      foreignKey: 'places_id'
    })
  }
  return Places;
};