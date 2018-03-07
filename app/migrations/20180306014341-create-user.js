'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name:{
          type:Sequelize.STRING,
      },
      last_name:{
        type:Sequelize.STRING,
      },
      city:{
        type:Sequelize.STRING,
      },
      state:{
        type:Sequelize.STRING,
      },
      image_url:{
        type:Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        validate:{
            notEmpty: true,
            len: 4
        },
      },
      password_digest: {
        type: Sequelize.STRING,
        unique: true,
        validate:{
            notEmpty: true,
            len: 8
        },
      },
      session_token: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true,
        validate:{
            notEmpty: true
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue : Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue : Sequelize.NOW

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};