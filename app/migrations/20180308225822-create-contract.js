'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lFullTime: {
        type: Sequelize.STRING
      },
      tFullName: {
        type: Sequelize.STRING
      },
      leaseType: {
        type: Sequelize.STRING
      },
      effectiveDate: {
        type: Sequelize.DATE
      },
      vacateNotice: {
        type: Sequelize.INTEGER
      },
      pType: {
        type: Sequelize.STRING
      },
      pAddress: {
        type: Sequelize.STRING
      },
      pAddress2: {
        type: Sequelize.STRING
      },
      pCity: {
        type: Sequelize.STRING
      },
      pState: {
        type: Sequelize.STRING
      },
      pZip: {
        type: Sequelize.INTEGER
      },
      furnished: {
        type: Sequelize.BOOLEAN
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      lAddress: {
        type: Sequelize.STRING
      },
      lAddress2: {
        type: Sequelize.STRING
      },
      lCity: {
        type: Sequelize.STRING
      },
      lState: {
        type: Sequelize.STRING
      },
      lZip: {
        type: Sequelize.INTEGER
      },
      tAddress: {
        type: Sequelize.STRING
      },
      tAddress2: {
        type: Sequelize.STRING
      },
      tState: {
        type: Sequelize.STRING
      },
      tZip: {
        type: Sequelize.INTEGER
      },
      lId: {
        type: Sequelize.INTEGER
      },
      tId: {
        type: Sequelize.INTEGER
      },
      rentAmount: {
        type: Sequelize.INTEGER
      },
      rentDueDate: {
        type: Sequelize.STRING
      },
      paymentMethod: {
        type: Sequelize.STRING
      },
      depositRequired: {
        type: Sequelize.BOOLEAN
      },
      depositAmount: {
        type: Sequelize.INTEGER
      },
      depositDueDate: {
        type: Sequelize.DATE
      },
      flmRequirement: {
        type: Sequelize.BOOLEAN
      },
      lateFeeRequirement: {
        type: Sequelize.BOOLEAN
      },
      lateFeeAmount: {
        type: Sequelize.STRING
      },
      utilities: {
        type: Sequelize.BOOLEAN
      },
      petsAllowed: {
        type: Sequelize.BOOLEAN
      },
      subletAllowed: {
        type: Sequelize.BOOLEAN
      },
      signingDate: {
        type: Sequelize.DATE
      },
      contractOwner: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contracts');
  }
};
