// backend/models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  payPerHour: Number,
  orderId: String,
  numDays: Number,
  wallet: {
    tokens: {
      type: String,
      default:
        "0x608060405234801561001057600080fd5b50610870806100206000396000f3fe608060405260043610610051576000357c0100000000000000000000000000000000000000000000000000000000900480632453ffa814610056578063a85c38ef14610081578063f8a2d7c214610232575b600080fd5b34801561006257600080fd",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
