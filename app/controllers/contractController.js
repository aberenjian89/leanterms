const express = require('express');
const models = require('../models/index');
const Contract = models.Contract;
const User = models.User;

const createContract = (req,res,next) => {
  const lFullTime = req.body.lFullTime;
  const tFullName = req.body.tFullName;
  const leaseType = req.body.leaseType;
  const effectiveDate = req.body.effectiveDate;
  const vacateNotice = req.body.vacateNotice;
  const pType = req.body.pType;
  const pAddress = req.body.pAddress;
  const pAddress2 = req.body.pAddress2;
  const pCity = req.body.pCity;
  const pState = req.body.pState;
  const pZip = req.body.pZip;
  const furnished = req.body.furnished;
  const parking = req.body.parking;
  const lAddress = req.body.lAddress;
  const lAddress2 = req.body.lAddress2;
  const lCity = req.body.lCity;
  const lState = req.body.lState;
  const lZip = req.body.lZip;
  const contractOwnerId = req.body.contractOwnerId;
  const rentAmount = req.body.rentAmount;
  const rentDueDate = req.body.rentDueDate;
  const paymentMethod = req.body.paymentMethod;
  const depositRequired = req.body.depositRequired;
  const depositAmount = req.body.depositAmount;
  const depositDueDate = req.body.depositDueDate;
  const flmRequirement = req.body.flmRequirement;
  const lateFeeRequirement = req.body.lateFeeRequirement;
  const lateFeeAmount = req.body.lateFeeAmount;
  const utilities = req.body.utilities;
  const petsAllowed = req.body.petsAllowed;
  const subletAllowed = req.body.subletAllowed;
  const signingDate = req.body.signingDate;

  if (lFullTime.length === 0) {
      return res.status(400).send("Landlord's full name is required");
  }
  if (tFullName.length === 0) {
      return res.status(400).send("Tenant's full name is required");
  }
  if (leaseType.length === 0) {
      return res.status(400).send("Lease type is required");
  }
  if (effectiveDate === undefined) {
      return res.status(400).send("Effective date is required");
  }
  if (vacateNotice.length === 0) {
      return res.status(400).send("Notice period is required");
  }
  if (pType.length === 0) {
      return res.status(400).send("Property is required");
  }
  if (pAddress.length === 0) {
      return res.status(400).send("Leased property street address is required");
  }

  if (pCity.length === 0) {
      return res.status(400).send("Leased property city is required");
  }
  if (pState.length === 0) {
      return res.status(400).send("Leased property state is required");
  }
  if (pZip === undefined) {
      return res.status(400).send("Leased property zip is required");
  }
  if (furnished === undefined) {
      return res.status(400).send("Furniture status is required");
  }
  if (parking === undefined) {
      return res.status(400).send("Parking status is required");
  }
  if (lAddress.length === 0) {
      return res.status(400).send("Landlord's street addressis required");
  }

  if (lCity.length === 0) {
      return res.status(400).send("Landlord's city of residence is required");
  }
  if (lState.length === 0) {
      return res.status(400).send("Landlord's state of residence is required");
  }
  if (lZip === undefined) {
      return res.status(400).send("Landlord's residence zip is required");
  }
  if (contractOwnerId === undefined) {
      return res.status(400).send("Contract owner is required");
  }
  if (rentAmount === undefined) {
      return res.status(400).send("Rent amount is required");
  }
  if (rentDueDate === undefined) {
      return res.status(400).send("Rent due date is required");
  }
  if (paymentMethod.length === 0) {
      return res.status(400).send("Payment method is required");
  }
  if (depositRequired === undefined) {
      return res.status(400).send("Deposit policy is required");
  }
  if (depositRequired && depositAmount.length === 0) {
      return res.status(400).send("Deposit amount is required");
  }
  if (depositDueDate === undefined) {
      return res.status(400).send("Deposit due date is required");
  }
  if (flmRequirement === undefined) {
      return res.status(400).send("First and last month's rent policy is required");
  }
  if (lateFeeRequirement === undefined) {
      return res.status(400).send("Late fee policy is required");
  }
  if (lateFeeRequirement && lateFeeAmount.length === 0) {
      return res.status(400).send("Late fee amount is required");
  }
  if (utilities === undefined) {
      return res.status(400).send("Utilities policy is required");
  }
  if (petsAllowed === undefined) {
      return res.status(400).send("Pet policy is required");
  }
  if (subletAllowed === undefined) {
      return res.status(400).send("Subletting policy is required");
  }
  if (signingDate === undefined) {
      return res.status(400).send("Signing date is required");
  }

  const contract = new Contract({
    lFullTime: lFullTime,
    tFullName: tFullName,
    leaseType: leaseType,
    effectiveDate: effectiveDate,
    vacateNotice: vacateNotice,
    pType: pType,
    pAddress: pAddress,
    pAddress2: pAddress2,
    pCity: pCity,
    pState: pState,
    pZip: pZip,
    furnished: furnished,
    parking: parking,
    lAddress: lAddress,
    lAddress2: lAddress2,
    lCity: lCity,
    lState: lState,
    lZip: lZip,
    contractOwnerId: contractOwnerId,
    rentAmount: rentAmount,
    rentDueDate: rentDueDate,
    paymentMethod: paymentMethod,
    depositRequired: depositRequired,
    depositAmount: depositAmount,
    depositDueDate: depositDueDate,
    flmRequirement: flmRequirement,
    lateFeeRequirement: lateFeeRequirement,
    lateFeeAmount: lateFeeAmount,
    utilities: utilities,
    petsAllowed: petsAllowed,
    subletAllowed: subletAllowed,
    signingDate: signingDate,
  });
  contract.save().then(function(newContract) {
    return res.status(200).send({
      lFullTime: newContract.lFullTime,
      tFullName: newContract.tFullName,
      leaseType: newContract.leaseType,
      effectiveDate: newContract.effectiveDate,
      vacateNotice: newContract.vacateNotice,
      pType: newContract.pType,
      pAddress: newContract.pAddress,
      pAddress2: newContract.pAddress2,
      pCity: newContract.pCity,
      pState: newContract.pState,
      pZip: newContract.pZip,
      furnished: newContract.furnished,
      parking: newContract.parking,
      lAddress: newContract.lAddress,
      lAddress2: newContract.lAddress2,
      lCity: newContract.lCity,
      lState: newContract.lState,
      lZip: newContract.lZip,
      contractOwnerId: newContract.contractOwnerId,
      rentAmount: newContract.rentAmount,
      rentDueDate: newContract.rentDueDate,
      paymentMethod: newContract.paymentMethod,
      depositRequired: newContract.depositRequired,
      depositAmount: newContract.depositAmount,
      depositDueDate: newContract.depositDueDate,
      flmRequirement: newContract.flmRequirement,
      lateFeeRequirement: newContract.lateFeeRequirement,
      lateFeeAmount: newContract.lateFeeAmount,
      utilities: newContract.utilities,
      petsAllowed: newContract.petsAllowed,
      subletAllowed: newContract.subletAllowed,
      signingDate: newContract.signingDate,
    });
  }
  ).catch(function (err) {
      return res.status(400).send(err.message);
  });
};

const updateContract = (req,res,next) => {
  const contractId = req.body.contractId;
  Contract.findOne({
    where:{
      id: contractId
    }
  }).then(function(contract) {
    contract.lFullTime = req.body.lFullTime;
    contract.tFullName = req.body.tFullName;
    contract.leaseType = req.body.leaseType;
    contract.effectiveDate = req.body.effectiveDate;
    contract.vacateNotice = req.body.vacateNotice;
    contract.pType = req.body.pType;
    contract.pAddress = req.body.pAddress;
    contract.pAddress2 = req.body.pAddress2;
    contract.pCity = req.body.pCity;
    contract.pState = req.body.pState;
    contract.pZip = req.body.pZip;
    contract.furnished = req.body.furnished;
    contract.parking = req.body.parking;
    contract.lAddress = req.body.lAddress;
    contract.lAddress2 = req.body.lAddress2;
    contract.lCity = req.body.lCity;
    contract.lState = req.body.lState;
    contract.lZip = req.body.lZip;
    contract.contractOwnerId = req.body.contractOwnerId;
    contract.rentAmount = req.body.rentAmount;
    contract.rentDueDate = req.body.rentDueDate;
    contract.paymentMethod = req.body.paymentMethod;
    contract.depositRequired = req.body.depositRequired;
    contract.depositAmount = req.body.depositAmount;
    contract.depositDueDate = req.body.depositDueDate;
    contract.flmRequirement = req.body.flmRequirement;
    contract.lateFeeRequirement = req.body.lateFeeRequirement;
    contract.lateFeeAmount = req.body.lateFeeAmount;
    contract.utilities = req.body.utilities;
    contract.petsAllowed = req.body.petsAllowed;
    contract.subletAllowed = req.body.subletAllowed;
    contract.signingDate = req.body.signingDate;
  }
);
};

const deleteContract = (req,res,next) => {

};

const findUserContracts = (req,res,next) => {

};

module.exports = {
  createContract,
  updateContract,
  deleteContract,
  findUserContracts
};
