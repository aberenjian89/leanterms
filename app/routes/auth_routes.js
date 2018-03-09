const express = require('express');
const authrouter = express.Router();
const userController = require('../controllers/usercontroller');

authrouter.route("/api/signup").post(userController.signup);
authrouter.route("/api/login").post(userController.login);
authrouter.route("/api/logout").get(userController.logout);
authrouter.route("/api/current_user").get(userController.currentUser);

module.exports = authrouter;
