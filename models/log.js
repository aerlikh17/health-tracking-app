const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    mood: {
        type: String,
        enum: ['Happy', 'Sad', 'Optimistic', 'Calm', 'Angry', 'Pessimstic', 'Stressed'],
    },
    duration: {
        type: Number,
        enum: [10, 20, 30, 45, 60, 90]
    },
    type: {
        type: String,
        enum: ['Endurance', 'Strength', 'Balance', 'Flexibility', 'None']
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
    customer: { type: Schema.Types.ObjectId, ref: 'Customer'}
}, {
    timestamps: {
        createdAt: 'created_at',
      }
});

module.exports = mongoose.model('Log', logSchema);
