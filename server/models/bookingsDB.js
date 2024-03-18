const { default: mongoose } = require("mongoose");
mongoose.pluralize(null);
const { connectBookingsDBs } = require("../databases/bookingsDB");

const sportBookingSchema = mongoose.Schema({
  show_up_status: Number,
  user_id: mongoose.ObjectId,
  time_slot: Number,
  type_of_sport: String,
  time_of_booking: Date,
  booking_status: Number,
  type_of_booking: Number,
  date_slot: String,
  partners_id: [mongoose.ObjectId],
  no_partners: Number,
  court_id: mongoose.ObjectId,
});

const gymSchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true,
  },
  time_slot: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.ObjectId,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  }, //0-gym and 1-pool
  year: {
    type: Number,
    required: true,
  },
  booking_status: Number,
  time_of_booking: {
    type: Date,
    required: true,
  },
});

const { bookingDB } = connectBookingsDBs();
module.exports = {
  sportBookingsSchema: bookingDB.model(
    "temp_sport_bookings",
    sportBookingSchema
  ),
  gymBookingsSchema: bookingDB.model("swim_gym_memberships", gymSchema),
};
