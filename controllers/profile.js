var express = require('express');
router = express.Router();


router.post('/', (req, res) => {
  console.log(req.body);
  var errors = [];
  if (!req.body.newProfileName) {
    errors.push({
      text: "Please add your name"
    });
  }
  if (!req.body.newProfiledob) {
    errors.push({
      text: "Please add your date of birth"
    });
  }
  if (!req.body.newProfileGender) {
    errors.push({
      text: "Please add your gender"
    });
  }
  if (!req.body.newProfileActivity) {
    errors.push({
      text: "Please add your activity level"
    });
  }
  if (!req.body.newProfileHeight) {
    errors.push({
      text: "Please add your height"
    });
  }
  if (errors.length > 0) {
    res.render('pages/profile/profile', {
      errors: errors,
      newProfileName: req.body.newProfileName,
      newProfiledob: req.body.newProfiledob,
      newProfileGender: req.body.newProfileGender,
      newProfileActivity: req.body.newProfileActivity,
      newProfileHeight: req.body.newProfileHeight
    })
  } else {
    res.redirect('pages/profile/profile-view')
  }
});
router.get('/add', (req, res) => {
  res.render('pages/profile/profile');
});
router.get('/view', (req, res) => {
  res.render('pages/profile/profile-view');
})

module.exports = router
