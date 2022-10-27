const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers');

router.get('/customers', customersCtrl.index);
router.get('/customers/bmi', isLoggedIn, customersCtrl.bmiShow)
router.post('/customers', isLoggedIn, customersCtrl.bmiCalculate);
router.delete('/:id', isLoggedIn, customersCtrl.delete);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated()) return next();
  res.redirect('/auth/google');
};

module.exports = router;