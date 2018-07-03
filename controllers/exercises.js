const express = require('express');
router = express.Router();



router.post('/', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.name) {
    errors.push({
      text: "Please add Exercise Name"
    });
  };
  if (errors.length > 0) {
    res.render('pages/exercises/exercises', {
      errors: errors,
      name: req.body.name,
      date: req.body.date
    })
  } else {
    res.render('pages/exercises/exercises');
  }
});
router.get('/add', (req, res) => {
  res.render('pages/exercises/exercises');
});
router.get('/list', (req, res) => {
  res.render('pages/exercises/exercises-list');
});


module.exports = router
