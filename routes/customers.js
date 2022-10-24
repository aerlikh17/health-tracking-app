const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers');

router.get('/customers', customersCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
};

module.exports = router;