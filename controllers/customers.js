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
        console.log('logs', currentCustomer);
        if(err) console.log(err);
        res.render('index', { title: 'Hello', user: req.user, currentCustomer, logs: currentCustomer.log });
    });
    console.log('index');
    }else{
        res.render('index', { title: 'Hello', user: req.user });
    }  
};

function bmiCalculate(req, res) {
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
            res.render('customers', { bmi, user: req.user, log: logObject});
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

function deleteOne(id) {
    const idx = logs.findIndex(log => log.id === parseInt(id));
    logs.splice(idx, 1);
}

function deleteLog(req, res) {
    Log.deleteOne(req.params.id);
    res.redirect('/customers');
}

module.exports = {
    index,
    bmiCalculate,
    bmiForm,
    bmiShow,
    create,
    delete: deleteLog,
    deleteOne
};