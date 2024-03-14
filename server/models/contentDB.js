const { default: mongoose } = require("mongoose");
const { connectContentDBs } = require("../databases/contentDB");

const tutorialSchema = mongoose.Schema({
  title: String,
  link: String,
  source: String,
  type_of_source: String,
});

const sport_workshopSchema = mongoose.Schema({
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

const yoga_sessionSchema = mongoose.Schema({
  max_strength: Number,
  content: String,
  date_slot: String,
  participant_id: [mongoose.ObjectId],
  yoga_instructor_user_id: mongoose.ObjectId,
  time_slot_start: Number,
  time_slot_end: Number,
});

const { contentDB } = connectContentDBs();
module.exports = {
  tutorialSchema: contentDB.model("tutorial", tutorialSchema),
  sport_workshopSchema: contentDB.model("sport_workshop", sport_workshopSchema),
  yoga_sessionSchema: contentDB.model("yoga_session", yoga_sessionSchema),
};
