const express = require('express');
const authrouter = express.Router();
const UserController = require('../controller/usercontroller');


authrouter.route("/api/signup").post(UserController.signup);
authrouter.route("/api/login").post(UserController.login);
authrouter.route("/api/logout").get(UserController.logout);
authrouter.route("/api/current_user").get(UserController.currentUser);

module.exports = authrouter;