const express = require('express');
router = express.Router();


router.get('/add', (req, res) => {
  res.render('pages/planner/planner');
});
router.get('/view', (req, res) => {
  res.render('pages/planner/planner-view');
});;



module.exports = router
