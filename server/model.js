const { default: mongoose } = require("mongoose");
const { connectDBs } = require("./db");

const userSchema = mongoose.Schema({
  username: String,
  email_id: String,
  user_category: Number,
  password: String,
  profile_pic: String,
});

const bookingSchema = mongoose.Schema({
  user_id: mongoose.ObjectId,
  time_slot: Number,
  date_slot: String,
  counsellor_user_id: mongoose.ObjectId,
  booking_status: Number,
  time_of_booking: Date,
});

const tutorialSchema = mongoose.Schema({
  title: String,
  link: String,
  source: String,
  type_of_source: String,
});

const { userDB, bookingDB, tutorialDB } = connectDBs();
module.exports = {
  userSchema: userDB.model("user", userSchema),
  bookingSchema: bookingDB.model("sport_booking", bookingSchema),
  tutorialSchema: tutorialDB.model("tutorial", tutorialSchema),
};