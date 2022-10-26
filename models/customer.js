const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    height: {
        type: Number,
    },
    BMI: {
        type: [Number],
    },
    log: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Log' }],
    },
    googleId: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
      }
});

module.exports = mongoose.model('Customer', customerSchema);