const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    name: { 
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    totalDays: {
        type: Number,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    

});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;