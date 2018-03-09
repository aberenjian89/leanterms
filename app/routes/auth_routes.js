const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/usercontroller');

authRouter.route("/api/signup").post(userController.signup);
authRouter.route("/api/login").post(userController.login);
authRouter.route("/api/logout").get(userController.logout);
authRouter.route("/api/current_user").get(userController.currentUser);




module.exports = authRouter;
