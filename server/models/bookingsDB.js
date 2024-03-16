const { default: mongoose } = require("mongoose");
mongoose.pluralize(null);
const { connectBookingsDBs } = require("../databases/bookingsDB");

const sportBookingSchema = mongoose.Schema({
  _id: mongoose.ObjectId,
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

const { bookingDB } = connectBookingsDBs();
module.exports = {
  sportBookingsSchema: bookingDB.model(
    "temp_sport_bookings",
    sportBookingSchema
  ),
};
