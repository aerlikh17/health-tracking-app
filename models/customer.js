const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    },
    mood: {
        type: String,
        enum: [],
       }
});

const weightSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    },
    weight: {
        type: Number,
       }
});

const exerciseSchema = new Schema ({

});

const bmiSchema = new Schema ({
    height: {
        type: Number,
       },
    weight: {
        type: Number,
    },
})

const customerSchema = new Schema ({
   name: {
    type: String,
   },
   email: {
    type: String,
   }, 
   gender: {
    type: String,
   },
   height: {
    type: Number,
   },
   BMI: {
    type: [bmiSchema],
   },
   mood: {
    type: [moodSchema],
   },
   weight: {
    type: Number,
   },
   exercise: {
    type: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
   },
   googleId: {
    type: String,
   }
});

module.exports = mongoose.model('Customer', customerSchema);