const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    },
    duration: {
        type: Number,
    },
    type: {
        type: String,
        enum: []
    },
    flight: [{ type: Schema.Types.ObjectId, ref: 'Flight'}]
});

module.exports = mongoose.model('Exercise', exerciseSchema);
