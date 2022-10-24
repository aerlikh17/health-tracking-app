const passport = require('passport');
const Customer = require('../models/customer');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Customer.findOne({'googleId': profile.id}, function(err, student){
        if(err) return cb(err);
        if(customer){
            return cb(null, customer);
        }else{
            const newCustomer = new Customer({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                gender: profile.gender
            });
            newCustomer.save(function(err) {
                if(err) return cb(err);
                return cb(null, newCustomer);
            });
        }
    });
  }
));

passport.serializeUser(function(customer, done) {
    done(null, customer.id);
});

passport.deserializeUser(function(id, done) {
    Customer.findById(id, function(err, customer) {
        done(err, customer);
    });
});