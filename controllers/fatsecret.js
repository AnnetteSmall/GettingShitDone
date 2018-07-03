var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  fs = require('../helpers/fatsecret'),
  KEY = 'a96a47c1239f4d738b2658613da73739',
  SECRET = '51363258d0e74b9c95b606cd1ce4af16',
  fatAPI = new(require('fatsecret'))(KEY, SECRET);
require('../models/FatsecretModel'),
  Food = mongoose.model('food');
// var Food = require('../models/FatsecretModel');
// fatAPI.setUserAuth(KEY, SECRET);


router.get('/:item', function(req, res, next) {
  var item = req.params.item;
  fatAPI.method('foods.search', {
      search_expression: item,
      max_results: 50
    })
    .then(function(results) {
      res.send(results);
      var foodList = new Array;
      console.log((results.foods.food).length);
      for (i = 0; i < (results.foods.food).length; i++) {
        var newFood = Food({
          brand_name: results.foods.food[i].brand_name,
          food_description: results.foods.food[i].food_description,
          food_id: results.foods.food[i].food_id,
          food_name: results.foods.food[i].food_name,
          food_type: results.foods.food[i].food_type,
          food_url: results.foods.food[i].food_url,
          food_serving: '',
          food_fat: '',
          food_carbs: '',
          food_protein: '',
          food_calories: ''
        });
        foodList.push(newFood);
      };
      fs.cleanResults(foodList);
    });
});



module.exports = router
