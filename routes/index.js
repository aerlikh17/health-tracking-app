var router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
  res.redirect('customers/index.ejs');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/customers',
    failureRedirect: '/customers',
  })
);

router.get('/logout', function(req, res) {
  res.logout();
  res.redirect('/customers');
});

module.exports = router;

