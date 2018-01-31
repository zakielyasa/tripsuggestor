'use strict';
module.exports = (sequelize, DataTypes) => {
  var places_interest = sequelize.define('places_interest', {
    places_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER
  });

  places_interest.associate = (models) => {
    places_interest.belongsTo(models.Places, {
      foreignKey: 'places_id'
    })

    places_interest.belongsTo(models.Interest, {
      foreignKey: 'interest_id'
    })
  }

  return places_interest;
};