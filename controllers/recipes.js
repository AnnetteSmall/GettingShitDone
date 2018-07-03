const express = require('express');
router = express.Router();

router.get('/add', (req, res) => {
  res.render('pages/recipes/recipes');
});
router.get('/list', (req, res) => {
  res.render('pages/recipes/recipes-list');
});

module.exports = router
