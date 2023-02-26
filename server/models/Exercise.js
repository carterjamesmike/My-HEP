const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({


});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;