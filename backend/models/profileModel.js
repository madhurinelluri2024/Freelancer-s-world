// backend/models/frellanceModel.js
const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  areaOfExpertise: {
    type: String,
    enum: ["Java", ".NET", "PowerBI", "Database Management"], // Enumerated list of expertise areas
  },
  yearsOfExperience: Number,
  wallet: {
    type: Number,
    default: 10,
  },
});

module.exports = mongoose.model("Freelancer", freelancerSchema);
