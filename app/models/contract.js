'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contract = sequelize.define('Contract', {
    lFullTime:{
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    tFullName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    leaseType: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    effectiveDate: {
      type: DataTypes.DATE,
      validate:{
        notEmpty: true,
      }
    },
    vacateNotice: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      }
    },
    pType: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    pAddress: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    pAddress2: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    pCity: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    pState: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    pZip: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      }
    },
    furnished: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    parking: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    lAddress: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    lAddress2: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    lCity: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    lState: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    lZip: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      }
    },
    contractOwnerId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      }
    },
    rentAmount: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      }
    },
    rentDueDate: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    paymentMethod: {
    type: DataTypes.STRING,
    validate:{
      notEmpty: true,      }
    },
    depositRequired: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    depositAmount: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      }
    },
    depositDueDate: {
      type: DataTypes.DATE,
      validate:{
        notEmpty: true,
      }
    },
    flmRequirement: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    lateFeeRequirement: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    lateFeeAmount: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    utilities: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    petsAllowed: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    subletAllowed: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty: true,
      }
    },
    signingDate: {
      type: DataTypes.DATE,
      validate:{
        notEmpty: true,
      }
    }
  });
  Contract.associate = function(models) {
    // associations can be defined here
  };
  return Contract;
};
