const { connect, default: mongoose } = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.MONGO_DATABASE;
const connecting = connect(mongodbUrl);

module.exports = connecting;
