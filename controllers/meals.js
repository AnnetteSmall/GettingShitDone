const express = require('express');
router = express.Router();


router.post('/', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.FoodEaten) {
    errors.push({
      text: "Please add food item"
    });
  };
  if (!req.body.quantity) {
    errors.push({
      text: "Please add a quantity"
    });
  };
  if (!req.body.date) {
    errors.push({
      text: "Please add the meal date"
    });
  };
  if (errors.length > 0) {
    res.render('pages/meals/meals', {
      errors: errors,
      FoodEaten: req.body.FoodEaten,
      quantity: req.body.quantity,
      date: req.body.date
    })
  } else {
    res.redirect('/meals/history');
  }
});

router.get('/add', (req, res) => {
  res.render('pages/meals/meals');
});

router.get('/history', (req, res) => {
  res.render('pages/meals/meals-history');
});



module.exports = router
