const express = require('express');
const authRouter = express.Router();
const sequelize = require('sequelize');

const router = function(){
    authRouter.route('/signUp')
        .post(function (req,res){
            console.log(req.body);
        })
};


module.exports = router;