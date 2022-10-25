const Customer = require('../models/customer');

module.exports = {
    index,
    bmiCalculate
};

function show (req, res) {

};

function create (req, res) {

};

function index (req, res) {
    res.render('index', { title: 'Hello', user: req.user });
};

function bmiCalculate (req, res) {
    //let BMI 
    //if statement for female/male
    //BMI or bmi:BMI
    //inside ejs bmi inside alligator brackets
    res.render('customers/bmi', { user: req.user});
};