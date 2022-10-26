var router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  let log = req.user
  console.log('test', log);
  res.redirect('/customers');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/customers/bmi',
    failureRedirect: '/',
  })
);

router.get('/logout', function(req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect('/customers');
});

module.exports = router;
