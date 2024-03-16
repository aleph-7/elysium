const express = require("express");
const SportsBookings = require("../models/bookingsDB").sports_bookingsSchema;

const router = express.Router();

router.get("/get_booking_history", async (req, res) => {
  const { user_id } = req.body.user_id;

  let doc;
  doc = await SportsBookings.find({ user_id: user_id });
  await SportsBookings.find({ user_id: user_id }).then((results) => {
    attributeList = results.map((doc) => [
      doc.type_of_sport == "table_tennis" ? "table tennis" : doc.type_of_sport,
      doc.date_slot,
      doc.booking_status,
    ]);
  });
  res.status(200).json({ message: attributeList });
});

module.exports = router;
