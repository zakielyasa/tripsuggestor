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

  Interest.associate = function (models) {

    // Interest.belongsToMany(models.User, {
    //   foreignKey: 'interest_id',
    //   through: 'user_interest'
    // })

    Interest.belongsToMany(models.Places, { through: 'places_interest', foreignKey: 'interest_id', otherKey: 'places_id'} )

  }
  return Interest;
};
