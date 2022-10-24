const Customer = require('../models/customer');

module.exports = {
    index,
};

function show (req, res) {

};

function create (req, res) {

};

function index (req, res) {
    Customer.find({}, function(err, customers) {
        if (err) res.send(err.message);
        res.render('customers/index.ejs', {title: 'Your Info', customers});
    }
)};