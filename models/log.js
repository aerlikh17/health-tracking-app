const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    duration: {
        type: Number,
        enum: []
    },
    type: {
        type: String,
        enum: []
    },
});

const logSchema = new Schema({
    mood: {
        type: String,
        enum: [],
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
    exercise: [exerciseSchema],  
    customer: [{ type: Schema.Types.ObjectId, ref: 'Customer'}]
});

module.exports = mongoose.model('Log', logSchema);
