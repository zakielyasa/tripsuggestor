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

    Places.belongsToMany(models.Interest, { through: 'places_interest', foreignKey: 'places_id', otherKey: 'interest_id'})

    Places.belongsToMany(models.User, {
      foreignKey: 'places_id',
      through: 'user_places',
      otherKey: 'user_id'
    })
    
  }
  return Places;
};

