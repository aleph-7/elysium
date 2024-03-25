const express = require("express");
const SportsBookings = require("../models/bookingsDB").sportBookingsSchema;
const router = express.Router();

router.get("/user/get_booking_history", async (req, res) => {
  const { user_id } = req.body;
  try {
    const results = await SportsBookings.find({ user_id });
    const attributeList = results.map((doc) => [
      doc.type_of_sport === "table_tennis" ? "table tennis" : doc.type_of_sport,
      doc.date_slot,
      doc.booking_status,
    ]);
    // console.log(user_id);
    res.status(200).json({ message: attributeList });
  } catch (error) {
    console.error("Error fetching booking history:", error);
    res.status(500).json({ message: "Error fetching booking history" });
  }
});


module.exports = router;
