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
const config = require('./config/config');



let env;
if (process.env.NODE_ENV === 'production'){
    env = config.production;
}else{
    env = config.development;
}


// const sequelize = new Sequelize('d29gjgg23v8m8e','','',{
//    host: host,
//    dialect: 'postgres',
//     operatorsAliases: false,
//     pool:{
//        max: 5,
//        min: 0,
//        acquire: 30000,
//        idle: 10000
//    }
// });

const sequelize = new Sequelize("postgres://kalgjzexwlzxic:9e2e4f63997f8e3cbf0210be372b2fe040c9967a7b6ca43e70ebbd0ac23db132@ec2-54-243-142-182.compute-1.amazonaws.com:5432/d29gjgg23v8m8e");



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



