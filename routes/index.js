var express = require('express');
const passport = require('passport');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('index.ejs');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

module.exports = router;

