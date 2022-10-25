const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers');

router.get('/customers', customersCtrl.index);
router.get('/customers/bmi', customersCtrl.bmiShow)
router.post('/customers/bmi',  customersCtrl.bmiCalculate);
router.get('/customers/weight', isLoggedIn, customersCtrl.weightLog);
router.get('/customers/mood', isLoggedIn, customersCtrl.moodLog);
router.get('/customers/log-detail', isLoggedIn, customersCtrl.logDetail);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated()) return next();
  res.redirect('/auth/google');
};

module.exports = router;