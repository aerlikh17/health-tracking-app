const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    mood: {
        type: String,
        enum: ['happy'],
    },
    duration: {
        type: Number,
        enum: [10]
    },
    type: {
        type: String,
        enum: ['gym']
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    BMI: {
        type: [Number],
    },
    customer: [{ type: Schema.Types.ObjectId, ref: 'Customer'}]
});

module.exports = mongoose.model('Log', logSchema);
