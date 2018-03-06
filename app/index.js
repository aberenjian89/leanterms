const express = require('express');
const Sequelize = require('sequelize');
const bodyparser = require('body-parser');

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

const app = express();


const authRouter = require('./routes/auth_routes');


//app.use(express.static('../frontend/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/Auth',authRouter);


app.get('/', function (req, res) {
    res.send("Hello World");
});

let port = process.env.port || 5000;

app.listen(port,function(err){
    console.log("Running Server on port",port)
});