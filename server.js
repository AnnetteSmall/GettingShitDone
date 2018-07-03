// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var router = express.Router();

// import from file for config
var configPort = require('./config/port.js');
var port = configPort.port;

var configDB = require('./config/database.js');


// Middleware ==================================================================
// Body Parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));

// Handlebars middleware
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Cors Middleware
var cors = require('cors');
var corsOptions = {
  origin: 'http://www.digitalfields.co.za',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));



//Public folder=================================================================
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// configuration ===============================================================
var mongoose = require('mongoose');
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

mongoose.connect(configDB.url, {
    useMongoClient: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err)); // connect to our database

// Models ======================================================================
// Load profile model
require('./models/ProfileModel');
const Profile = mongoose.model('profile');
// load fatsecret model
require('./models/FatsecretModel');
const Food = mongoose.model('food');

//Controllers===================================================================
// Load controllers
const profile = require('./controllers/profile');
const fatsecret = require('./controllers/fatsecret');
const food = require('./controllers/food');
const weight = require('./controllers/weight');
const todos = require('./controllers/todos');
const recipes = require('./controllers/recipes');
const progress = require('./controllers/progress');
const planner = require('./controllers/planner');
const measurements = require('./controllers/measurements');
const meals = require('./controllers/meals');
const exercises = require('./controllers/exercises');
const goals = require('./controllers/goals');
const friends = require('./controllers/friends');


// Routes ======================================================================

// set up our express application landing route
app.get('/', (req, res) => {
  res.render('index');
});

// routes
app.use('/profile', profile);
app.use('/fatsecret', fatsecret);
app.use('/food', food);
app.use('/weight', weight);
app.use('/todos', todos);
app.use('/recipes', recipes);
app.use('/progress', progress);
app.use('/planner', planner);
app.use('/measurements', measurements);
app.use('/meals', meals);
app.use('/exercises', exercises);
app.use('/food', food);
app.use('/goals', goals);
app.use('/friends', friends);



// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
