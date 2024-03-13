const { default: mongoose } = require("mongoose");
const { connectDBs } = require("./db");

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

const workshopSchema = mongoose.Schema({
  time_slot_start: Number,
  time_slot_end: Number,
  content: String,
  equipment: { String: Number },
  coach_user_id: mongoose.ObjectId,
  max_strength: Number,
  court_id: mongoose.ObjectId,
  date_slot: String,
  participant_id: [mongoose.ObjectId],
  type_of_sport: String,
});

const { userDB, bookingDB, tutorialDB } = connectDBs();
module.exports = {
  bookingSchema: bookingDB.model("sport_booking", bookingSchema),
  tutorialSchema: tutorialDB.model("tutorial", tutorialSchema),
  workshopSchema: tutorialDB.model("sport_workshop", workshopSchema),
};
