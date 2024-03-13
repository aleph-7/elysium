const { default: mongoose } = require("mongoose");
const { connectBookingsDBs } = require("../databases/bookingsDB");

const sports_bookingsSchema = mongoose.Schema({
  show_up_status: Number,
  court_id: {
    type: Number,
  },
  user_id: {
    type: mongoose.ObjectId,
    required: true,
  },
  time_slot: {
    type: Number,
    required: true,
  },
  type_of_sport: {
    type: String,
    required: true,
  },
  time_of_booking: {
    type: Date,
    required: true,
  },
  booking_status: Number,
  date: {
    type: String,
    required: true,
  },
});

const { bookingDB } = connectBookingsDBs();
module.exports = {
  sports_bookingsSchema: bookingDB.model("user", sports_bookingsSchema),
};
