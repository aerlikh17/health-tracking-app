const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const customerSchema = new Schema ({
//     name:,
//     e-mail:,
//     gender:,
//     height:,
//     BMI:,
//     moodLog:,
//     weightLog:,
//     exerciseLog:,
// });

module.exports = mongoose.model('Customer', customerSchema);