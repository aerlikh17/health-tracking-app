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
        if (err) console.log(err.message);
        res.render('customers/show.ejs', {
            customers,
            name: req.query.name,
            sortKey,
            user: req.user,
        })
    }
)};