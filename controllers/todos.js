const express = require('express');
router = express.Router();


router.post('/', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.name) {
    errors.push({
      text: "Please add todo"
    });
  };
  if (errors.length > 0) {
    res.render('todos', {
      errors: errors,
      name: req.body.name,
      date: req.body.date
    })
  } else {
    res.render('pages/todos/todos');
  }
});
router.get('/add', (req, res) => {
  res.render('pages/todos/todos');
});
router.get('/list', (req, res) => {
  res.render('pages/todos/todos-list');
});


module.exports = router
