const express = require('express');
router = express.Router();


router.get('/', (req, res) => {
  res.render('pages/progress/progress');
});

module.exports = router
