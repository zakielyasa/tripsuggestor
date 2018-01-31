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

  Places.associate = function (models) {

    Places.belongsToMany(models.places_interest, { through: 'places_interest', foreignKey: 'places_id', otherKey: 'interest_id'})

    // Places.belongsToMany(models.user_places, {
    //   foreignKey: 'places_id',
    //   through: 'places_interest'
    // })
    //
  }
  return Places;
};
