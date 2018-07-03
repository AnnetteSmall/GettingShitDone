var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

require('../models/FatsecretModel');
var Food = mongoose.model('food');

router.post('/', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.foodItem) {
    errors.push({
      text: "Please add food item"
    });
  };
  if (errors.length > 0) {
    res.render('pages/food/meals', {
      errors: errors,
      FoodEaten: req.body.FoodEaten,
      quantity: req.body.quantity,
      date: req.body.date
    })
  } else {
    res.render('pages/food/foodsearch');
  }
});
router.get('/fav', (req, res) => {
  res.render('pages/food/foodfav')
});
router.get('/search', (req, res) => {
  res.render('pages/food/foodsearch')
});

//http://localhost:8080/food/get/all
router.get('/all', function(req, res) {
  Food.find({}, function(err, food) {
    if (err) throw err;
    res.send(food);
  });
});

//http://localhost:8080/food/get/item?item=peach
router.get('/get/item?', function(req, res) {
  var item = req.query.item;
  var regexp = new RegExp(req.query.item, "i");
  console.log(' Looking for item : ', regexp);
  Food.find({
    food_name: regexp
  }, function(err, food) {
    if (err) throw err;
    console.log("found: ", food);
    console.log("nr items found : ", food.length);
    res.send(food);
  });
});

//http://localhost:8080/food/get/id?id=5287459698
router.get('/get/id?', function(req, res) {
  var itemID = req.query.id;
  Food.find({
    food_id: itemID
  }, function(err, food) {
    if (err) throw err;
    console.log("found: ", food);
    res.send(food);
  });
});

router.get('/get/brand?', function(req, res) {
  var item = req.query.brand;
  var regexp = new RegExp(req.query.brand, "i");
  console.log(' Looking for item : ', regexp);
  Food.find({
    brand_name: regexp
  }, function(err, food) {
    if (err) throw err;
    console.log("found: ", food);
    res.send(food);
  });
});


router.get('/delete/:id', function(req, res) {
  Food.remove({
    food_id: req.params.id
  }, function(err) {
    if (!err) {
      res.send("removed");
    } else {
      res.send(err);
    }
  });
});

router.get('/hello', function(req, res) {
  res.send("and Hello to you")
})



module.exports = router
