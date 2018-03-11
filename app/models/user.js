'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate:{
        notEmpty: true,
        len: 4
      },
    },
    password_digest: {
      type: DataTypes.STRING,
      unique: true,
      validate:{
          notEmpty: true,
          len: 8
      }
    },
    session_token: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    image_url: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};