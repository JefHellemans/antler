//set up
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

//config
mongoose.connect(configDB.url); //connect to db

require('./config/passport')(passport); // pass passport for configuration

//set up express
app.use(morgan('dev')); //log elke request naar console
app.use(cookieParser()); //read cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //informatie over html forms

app.set('view engine', 'ejs'); //ejs als viewengine instellen

//required for passport
app.use(session({ secret: 'nicolslavandaisthegreatestguyintheworld', resave: true, saveUninitialized: true })); //session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); //gebruik flash voor flash messages opgeslaan in session

//routes
require('./app/routes.js')(app, passport); //routes inladen en doorgeven in app en passport

app.listen(port);
console.log('The magic happens on port ' + port);