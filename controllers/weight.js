const express = require('express');
router = express.Router();


router.get('/add', (req, res) => {
  res.render('pages/weight/weight');
});

router.get('/history', (req, res) => {
  res.render('pages/weight/weight-history');
});

router.post('/', (req, res) => {
  var errors = [];
  if (!req.body.weight) {
    errors.push({
      text: "Please add valid weight"
    });
  }
  if (!req.body.date) {
    errors.push({
      text: "Please add a date"
    });
  }
  if (errors.length > 0) {
    res.render('pages/weight/weight', {
      errors: errors,
      weight: req.body.weight,
      date: req.body.date
    })
  } else {
    res.redirect('pages/weight/weight-history')
  }
});



module.exports = router
