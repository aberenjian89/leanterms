const express = require('express');
const bcrypt = require('bcrypt');
const models = require('../models/index');
const crypto = require('crypto');
const User = models.User;

const signup = (req,res,next) =>{
    const errors = [];

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const session_token = crypto.randomBytes(32).toString('hex');
    if (username.length < 4 ) {
        errors.unshift("Username should have at least 4 characters");
    }
    if (password.length < 8){
        errors.unshift("Password should have at least 8 characters");
    }
    if (email.length < 4){
        errors.unshift("Email required to sign up");
    }

    if (errors.length > 0){
        return res.status(400).send(errors);
    }

    User.findOne({
        where:{
            username: username
        }
    }).then(function (user) {
        if (user){
            errors.unshift("username has been taken, please try a different one");
            return res.status(400).send(errors);
        }else{
            bcrypt.hash(password,10,(err,hash)=>{
                const user = new User({
                    username: username,
                    password_digest: hash,
                    session_token: session_token
                });
                user.save().then(function (user) {
                    res.cookie('leanterms',user.session_token);
                    return res.status(200).send({
                        id: user.id,
                        username: user.username
                    });
                    }
                ).catch(function (err) {
                    return res.status(400).send(err.message);
                })
            });
        }
    });
};


const login = (req,res,next) =>{
    const errors = [];

    User.findOne({
        where:{
            username: req.body.username,
        }
    }).then(function (user) {

        const hash = user.password_digest ;
        bcrypt.compare(req.body.password,hash,function (err,response) {
            console.log(response);
            console.log(err);
           if (response === true){
               res.cookie('leanterms',user.session_token);
               return res.status(200).send({
                   id: user.id,
                   username: user.username
               })
           }else{
              errors.unshift("Invalid Username or Password");
              return res.status(400).send(errors);
           }
        });
    }).catch(function () {
      errors.unshift("Invalid Username or Password");
      return res.status(400).send(errors);
    })

};


const logout = (req,res,next) =>{
    User.findOne({
        where:{
            session_token: req.cookies['leanterms']
        }
    }).then(function (user) {
        res.clearCookie('leanterms');
        user.session_token = crypto.randomBytes(32).toString('hex');
        user.save().then(function () {
            return res.status(200).json("Successfully logged out!");
        }).catch(function (err) {
            return res.status(422).json(err.message);
        });
    }).catch(function (err) {
        return res.status(422).json(err.message);
    })
};


const currentUser = (req,res,next)=> {
    if (req.cookies['leanterms']===undefined){
        return res.status(200).send(null)
    }
    User.findOne({
        where: {
            session_token: req.cookies['leanterms']
        }
    }).then(function (user) {
        if (user) {
            return res.status(200).send({
                id: user.id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            })
        }
    }).catch(function (err) {
        return res.status(400).send(err.message)
    });
};




module.exports ={
    signup,
    login,
    logout,
    currentUser
};
