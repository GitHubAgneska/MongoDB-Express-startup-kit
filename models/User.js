import { Schema, model } from 'mongoose';

// Create Schema
const EmployeeSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
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

const Employee = model('user', EmployeeSchema);

export default Employee;
