'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_places = sequelize.define('user_places', {
    user_id: DataTypes.INTEGER,
    places_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  });

  user_places.associate = (models) => {
    user_places.belongsTo(models.User, {
      foreignKey: `user_id`
    })
    user_places.belongsTo(models.Places, {
      foreignKey: `places_id`
    })

  }
  return user_places;
};