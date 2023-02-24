const { Schema, model } = require('mongoose');

const patientSchema = new Schema({


});

const Patient = model('Patient', patientSchema);

module.exports = Patient;