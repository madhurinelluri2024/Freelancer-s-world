const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connecting = require("./config.js/db.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Users Router
const profile = require("./routes/orderRoutes.js");
//Error handler

app.use("/api/v1", profile);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 7000;
app.listen(PORT, async () => {
  try {
    await connecting;

    console.log("Connected to db");
    console.log(`Service Listen to the port=> http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
