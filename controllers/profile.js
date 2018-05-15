var express = require('express');
router = express.Router();


router.get('/show', function(req, res){
  res.send("Showing Profile data");
});

module.exports = router
