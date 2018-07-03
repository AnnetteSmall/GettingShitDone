const express = require('express');
router = express.Router();


router.post('/', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.name) {
    errors.push({
      text: "Please add a Goal Name"
    });
  }
  if (errors.length > 0) {
    res.render('pages/goals/add', {
      errors: errors,
      name: req.body.name,
      date: req.body.date
    })
  } else {
    res.render('pages/goals/goals')
  }
})
router.get('/add', (req, res) => {
  res.render('pages/goals/goals');
});
router.get('/list', (req, res) => {
  res.render('pages/goals/goals');
});



module.exports = router
