var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
require('dotenv').load();
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
consign()
    .include('app/routes')
    .then('config/db_connection.js')
    .then('app/models')
    .into(app);

module.exports = app;