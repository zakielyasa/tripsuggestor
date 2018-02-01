var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_places = sequelize.define('user_places', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    user_id: DataTypes.INTEGER,
    places_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  });

  user_places.associate = function(models) {
    user_places.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    user_places.belongsTo(models.Places, {
      foreignKey: `places_id`
    })

  }

  return user_places;
};