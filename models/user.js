'use strict';

var bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate: {
          is: ["^[a-z]+$",'i'], //hanya nerima huruf
          notEmpty: true
       }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate: {
        // isAlphanumeric: true, //hanya nerima alphanumeric A-Z & 0-9
        notEmpty: true
      }
    }
  })

  User.associate = (models) => {
    User.hasMany(models.user_interest, {
      foreignKey: 'user_id'
    })
    User.hasMany(models.user_places, {
      foreignKey: 'user_id'
    })
  }

  User.beforeCreate(user => {
    const saltRounds = 10;
    const myPlaintextPassword = 'user.password';
    return bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
      user.password = hash
  })
})

  return User;
};
