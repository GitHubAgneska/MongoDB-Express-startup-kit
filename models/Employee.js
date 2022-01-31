const mongoose = require('mongoose')

// Create Schema
const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  start_date: {
    type: Date
  },
  dob_date: {
    type: Date
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: String
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema)
