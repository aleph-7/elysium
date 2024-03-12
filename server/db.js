const mongoose = require("mongoose");
require("dotenv").config();

const connectDBs = () => {
  try {
    const userDB = mongoose.createConnection(process.env.MONGODB_User);
    console.log("User DB Connected");
    const bookingDB = mongoose.createConnection(process.env.MONGODB_Booking);
    console.log("Booking DB Connected");
    const tutorialDB = mongoose.createConnection(process.env.MONGODB_Tutorial);
    console.log("Tutorial DB Connected");
    return { userDB, bookingDB, tutorialDB };
  } catch (error) {
    console.error("Error: $(error.message)");
    process.exit(1);
  }
};
module.exports = { connectDBs };
