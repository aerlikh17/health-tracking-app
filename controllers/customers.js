const Customer = require('../models/customer');
const Log = require('../models/log');


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
    if(req.user){
    Customer.findById(req.user._id).populate({path:'log'}).exec(function(err, currentCustomer) {
        if(err) console.log(err);
        res.render('index', { title: 'Hello', user: req.user, currentCustomer, logs: currentCustomer.log });
    });
    }else{
        res.render('index', { title: 'Hello', user: req.user });
    }  
};

function logData(req, res) {
    height = parseFloat(req.body.height);
    weight = parseFloat(req.body.weight);
    bmi = (weight / (height * height)) * 10000;
    bmi = bmi.toFixed();

        let newLog = new Log(req.body);

        newLog.BMI.push(Number(bmi));
        newLog.duration = req.body.duration;
        newLog.type = req.body.type;
        newLog.customer = req.user.id;
        req.user.log.push(newLog._id);
        newLog.save();

        req.user.BMI.push(Number(bmi));

        // pushes the request body, pushes it to the object of 'drinker'
        req.user.save(function (err) {
            console.log(req.user.log)
            let logObject = Log.find({'customer': req.user.id});
            if (err) { console.log("error log", err) }
            // res.render('index', { bmi, user: req.user, log: logObject});
            res.redirect('/customers');
        });
}

function bmiForm(req, res) {
    if (req.user.weight != undefined) {
        res.redirect('index')
    } else {
        res.render('customers/bmi', { user: req.user });
    }
};

function deleteOne(id) {
    const idx = logs.findIndex(log => log.id === parseInt(id));
    logs.splice(idx, 1);
}

function deleteLog(req, res) {
    console.log(req.params.id)
    Log.deleteOne({'_id': req.params.id}, function(err, log) {
        if(err) console.log(err);
        console.log(log);
        res.redirect('/customers');
    });
}

module.exports = {
    index,
    logData,
    bmiForm,
    create,
    delete: deleteLog,
    deleteOne
};