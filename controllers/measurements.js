const express = require('express');
router = express.Router();


router.post('/measurements', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.newMeasurement) {
    errors.push({
      text: "What are you measuring"
    });
  }
  if (!req.body.measurement) {
    errors.push({
      text: "Please add your measurement"
    });
  };
  if (errors.length > 0) {
    res.render('pages/measurements/measurements', {
      errors: errors,
      newMeasurement: req.body.newMeasurement,
      measurement: req.body.measurement
    })
  } else {
    res.render('pages/measurements/measurements')
  }
});
router.get('/add', (req, res) => {
  res.render('pages/measurements/measurements');
});
router.get('/history', (req, res) => {
  res.render('pages/measurements/measurements-history');
});


module.exports = router
