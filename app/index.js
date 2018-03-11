const express = require('express');
const Sequelize = require('sequelize');
const bodyparser = require('body-parser');
const path = require('path');
const cookieparser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const PdfGenerate = require('./routes/generatepdfroute');
const authRouter = require('./routes/auth_routes');
const contractRouter = require('./routes/contract_routes');

let host;
if (process.env.NODE_ENV === 'production'){
    host = "ec2-54-243-142-182.compute-1.amazonaws.com"
}else{
    host = "localhost"
}


const sequelize = new Sequelize('leanterms','','',{
   host: host,
   dialect: 'postgres',
    operatorsAliases: false,
    pool:{
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   }
});
// Testing Connection For Database
sequelize.authenticate().then(() =>{
    console.log('Connection has been established successfully.');
}).catch(err =>{
    console.error('Unable to Connect to the database:',err);
});

const app = express();

app.use(express.static('frontend/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser());

app.use(PdfGenerate);


app.use(authRouter);
app.use(contractRouter);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../','index.html'));
});

let port = process.env.port || 5000;

app.listen(port,function(err){
    console.log("Running Server on port",port);
});

module.exports = require('../node_modules/.bin/sequelize');


