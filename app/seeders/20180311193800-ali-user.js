'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users',[{
            username: "ali",
            password_digest: "12345678"
        }],{})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users',null,{})
    }
};
