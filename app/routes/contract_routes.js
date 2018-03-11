const express = require('express');
const contractRouter = express.Router();
const contractController = require('../controllers/contractController');

contractRouter.route("/api/users/:userId/contracts").post(contractController.createContract);
contractRouter.route("api/users/:userId/contracts/:contractId").patch(contractController.updateContract);
contractRouter.route("api/users/:userId/contracts/:contractId").delete(contractController.deleteContract);
contractRouter.route("api/users/:userId/contracts/contracts").get(contractController.findUserContracts);

module.exports = contractRouter;
