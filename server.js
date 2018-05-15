// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var router = express.Router();
var configPort = require('./config/port.js');
var port     = configPort.port;
var mongoose = require('mongoose');



var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// configuration ===============================================================
mongoose.connect(configDB.url, {
    useMongoClient: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err)); // connect to our database

// Load profile model
require('./models/ProfileModel');
const Profile = mongoose.model('profile');
// load fatsecret model
require('./models/FatsecretModel');
const Food = mongoose.model('food');
// Load controllers
const profile = require('./controllers/profile');
const fatsecret = require('./controllers/fatsecret');
const food = require('./controllers/food');


// set up our express application
// app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/profile', profile);
app.use('/fatsecret', fatsecret);
app.use('/food', food)

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
