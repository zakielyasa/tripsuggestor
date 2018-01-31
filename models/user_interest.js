'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_interest = sequelize.define('user_interest', {
    user_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER
  });

  user_interest.associate = (models) => {
    user_interest.belongsTo(models.User, {
      foreignKey: 'user_id'
    })

    user_interest.belongsTo(models.Interest, {
      foreignKey: 'interest_id'
    })
  }
  return user_interest;
};