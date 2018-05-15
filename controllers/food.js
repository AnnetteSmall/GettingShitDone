var express = require('express'),
router = express.Router(),
mongoose = require('mongoose');

require('../models/FatsecretModel');
var Food = mongoose.model('food');

router.get('/all', function(req, res){
  Food.find({}, function(err, food){
    if(err) throw err;
    res.send(food);
  });
});

router.get('/get/item?', function(req, res){ //http://localhost:8080/food/get/item?item=peach
  var item = req.query.item;
  var regexp = new RegExp(req.query.item, "i");
  console.log(' Looking for item : ', regexp);
  Food.find({food_name:regexp }, function(err, food){
    if(err) throw err;
    console.log("found: ", food);
    res.send(food);
  });
});

router.get('/get/brand?', function(req, res){ 
  var item = req.query.brand;
  var regexp = new RegExp(req.query.brand, "i");
  console.log(' Looking for item : ', regexp);
  Food.find({brand_name:regexp }, function(err, food){
    if(err) throw err;
    console.log("found: ", food);
    res.send(food);
  });
});


router.get('/delete/:id', function(req, res){
  Food.remove({ food_id: req.params.id }, function(err) {
    if (!err) {
            res.send("removed");
    }
    else {
            res.send(err);
    }
  });
});

router.get('/hello', function(req,res){
  res.send("and Hello to you")
})



module.exports = router
