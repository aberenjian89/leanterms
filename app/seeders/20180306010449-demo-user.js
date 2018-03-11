'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users',[{
       username: "DEMO",
       password_digest: "12345678"
   }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',null,{})
  }
};

