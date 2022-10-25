const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers');

router.get('/customers', customersCtrl.index);
router.get('/customers/bmi', customersCtrl.bmiCalculate);

// router.post('/facts', isLoggedIn, studentsCtrl.addFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated()) return next();
  res.redirect('/auth/google');
};

module.exports = router;