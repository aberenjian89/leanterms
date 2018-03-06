const express = require('express');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('leanterms','','',{
   host: 'localhost',
   dialect: 'postgres',
    operatorsAliases: false,
    pool:{
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   }
});


sequelize.authenticate().then(() =>{
    console.log('Connection has been established successfully.');
}).catch(err =>{
    console.error('Unable to Connect to the database:',err)
});

// DB Connection String
const connect = "postgres://@localhost/leanterms";

const app = express();




app.get('/', function (req, res) {
    // pg.connect(connect,function(err,client,done){
    //     // if (err){
    //     //     return console.error("error fetching client from pool",err)
    //     // }
    //     client.query('SELECT $1::int as ')
    // })
    res.send("Hello World");
});

let port = process.env.port || 5000;

app.listen(port,function(err){
    console.log("Running Server on port",port)
});