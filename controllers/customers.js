const Customer = require('../models/customer');
const Log = require('../models/log');

function show(req, res) {

};

function create(req, res) {
    Customer.findById(req.params.id, function (err, customer) {
        customer.height.push(req.body);
        customer.gender.push(req.body);
        customer.save(function (err) {
            res.redirect(`/customers/${user._id}`);
        });
    });
};

function index(req, res) {
    // let log = req.user
    res.render('index', { title: 'Hello', user: req.user, log: req });
};

function bmiCalculate(req, res) {
    // console.log('test2', req.user);
    let log = Log.findMany(req.user.log);
    console.log('test object', log);
    height = parseFloat(req.body.height);
    weight = parseFloat(req.body.weight);
    bmi = (weight / (height * height)) * 10000;
    bmi = bmi.toFixed();

    Customer.findById(req.user.id, function (err, customer) {
        let newLog = new Log(req.body);

        newLog.BMI.push(Number(bmi));
        newLog.duration = req.body.duration;
        newLog.type = req.body.type;
        newLog.customer = req.user.id;
        newLog.save();
        // customer.log.push(newLog);

        console.log(newLog);
        // movie as argument is an object.
        if (err) return res.render(err.message);
        customer.BMI.push(Number(bmi));

        // pushes the request body, pushes it to the object of 'drinker'
        customer.save(function (err) {
            if (err) { console.log("error log", err) }
            res.render('customers', { bmi, user: req.user });
        });
    });
}

function bmiShow(req, res) {
    let bmi = 567;
    res.render('customers/bmi', { bmi, user: req.user });
};


function bmiForm(req, res) {
    if (req.user.weight != undefined) {
        res.redirect('index')
    } else {
        res.render('customers/bmi', { user: req.user });
    }
};

function weightLog(req, res) {
    res.render('customers/weight', { user: req.user });
}

function moodLog(req, res) {
    res.render('customers/mood', { user: req.user });
}

function logDetail(req, res) {
    res.render('customers/log-detail', { user: req.user });
}

module.exports = {
    index,
    bmiCalculate,
    bmiForm,
    bmiShow,
    create,
    weightLog,
    moodLog,
    logDetail,
};