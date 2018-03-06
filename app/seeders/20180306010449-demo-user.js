'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users',[{
       username: "DEMO",
       password_digest: "12345678",
       session_token: "sfewrhjdfgerdgdgd",
   }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',null,{})
  }
};
