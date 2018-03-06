const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const User = require('../models/user');
const crypto = require('crypto');

const signup = (req,res,next) =>{
    const errors = [];

    const username = req.body.username;
    const password = req.body.password;
    const session_token = crypto.randomBytes(32).toString('hex');

    User.findOne({

    })


};


const login = (req,res,next) =>{

};


const logout = (req,res,next) =>{

};


const currentUser = (req,res,next)=>{

};



module.exports ={
    signup,
    login,
    logout,
    currentUser
};

