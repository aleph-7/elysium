const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
require("dotenv").config();
const jsw = require("jsonwebtoken");
const secretKey =
  "a3e31fd2b7ed999b65ee2653024297b9f737e282afb9b686d8401e10c617a591";
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(parser.json());

const User = require("./models/userDB").userSchema;
const SportsBookings = require("./models/bookingsDB").sportBookingsSchema;
const Yoga_Sessions = require("./models/contentDB").yoga_sessionSchema;
const Workshop = require("./models/contentDB").sport_workshopSchema;
const Leaderboard = require("./models/leaderboardDB").leaderboardSchema;
const Blog = require("./models/contentDB").blog_counsellorSchema;
const Court = require("./models/courtDB").courtsSchema;
const Availability =
  require("./models/contentDB").counsellor_availabilitySchema;
const Gymbook = require("./models/bookingsDB").gym_bookingsSchema;

app.get("/badminton/leaderboard", async (req, res) => {
  let attributeList;
  await Leaderboard.find({}).then((results) => {
    attributeList = results.map((doc) => [doc.position]);
  });
  res.json({ message: attributeList });
});

//Authentication
const authRoutes = require("./routes/auth");
app.use("", authRoutes);
//TUTORIALS
const tutorialsRoutes = require("./routes/tutorials");
app.use("/tutorials", tutorialsRoutes);
//WORKSHOPS
const workshopRoutes = require("./routes/workshop");
app.use("/workshops", workshopRoutes);
const applyWorkshopRoutes = require("./routes/apply_workshop");
app.use("/apply_workshop", applyWorkshopRoutes);
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);
//Animesh dump imported..
const bookingRoutes = require("./routes/algorithms/booking");
app.use("/booking", bookingRoutes);
const leaderboardRoutes = require("./routes/leaderboard");
app.use("/leaderboard", leaderboardRoutes);
//Listening to the server.
app.listen(process.env.PORT || 6300, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
adminRoutes = require("./routes/admin");
app.use("", adminRoutes);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const router = express.Router();
const checkAuth = require("./middleware/check_auth");

// A protected route
app.get("/profile", checkAuth, (req, res) => {
  // Access user data through req.userData
  req.username = "kushu";
  req.password = "yoyo";
  res.json({ message: "You are authenticated" });
});

// app.get("/profile", async (req, res) => {
//   // Access user data through req.userData
//   console.log("yoyo");
//   res.json({ message: "You are authenticated" });
// });

//// ARUSHU ///////

app.post("/yoga/postSession", async (req, res) => {
  try {
    //Creating a new user
    const new_yoga_session = new Yoga_Sessions({
      max_strength: req.body.batch_size,
      content: req.body.content,
      date_slot: req.body.startDate,
      participant_id: [],
      // yoga_instructor_user_id: req.body.yoga_instructor_user_id,
      time_slot_start: req.body.startTime,
      time_slot_end: req.body.endTime,
    });
    //Saving the user to the database
    console.log(req.body);
    const doc = await new_yoga_session.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Post successful" });
  } catch (err) {
    //Sending the error message to the frontend
    console.log(err);
    res.status(500).json({ error: "Post failed" });
  }
});

app.post("/coach/postWorkshop", async (req, res) => {
  try {
    const new_workshop = new Workshop({
      time_slot_start: req.body.start_time,
      time_slot_end: req.body.end_time,
      content: req.body.description,
      // equipment: req.body.equipment,
      equipment: {
        raquet: Number(req.body.raquet),
        cork: Number(req.body.cork),
        shoe: Number(req.body.shoe),
      },
      coach_user_id: req.body.coach_user_id,
      max_strength: req.body.max_participants,
      date_slot: req.body.date,
      participant_id: [],
      type_of_sport: req.body.type_of_sport,
    });
    console.log(new_workshop);
    const doc = await new_workshop.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Post successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Post failed" });
  }
});

app.post("/coach/postWorkshop", async (req, res) => {
  try {
    const new_workshop = new Workshop({
      time_slot_start: req.body.start_time,
      time_slot_end: req.body.end_time,
      content: req.body.description,
      // equipment: req.body.equipment,
      equipment: {
        raquet: Number(req.body.raquet),
        cork: Number(req.body.cork),
        shoe: Number(req.body.shoe),
      },
      coach_user_id: req.body.coach_user_id,
      max_strength: req.body.max_participants,
      date_slot: req.body.date,
      participant_id: [],
      type_of_sport: req.body.type_of_sport,
    });
    console.log(new_workshop);
    const doc = await new_workshop.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Post successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Post failed" });
  }
});

app.post("/coach/postWorkshop", async (req, res) => {
  try {
    const new_workshop = new Workshop({
      time_slot_start: req.body.start_time,
      time_slot_end: req.body.end_time,
      content: req.body.description,
      // equipment: req.body.equipment,
      equipment: {
        raquet: Number(req.body.raquet),
        cork: Number(req.body.cork),
        shoe: Number(req.body.shoe),
      },
      coach_user_id: req.body.coach_user_id,
      max_strength: req.body.max_participants,
      date_slot: req.body.date,
      participant_id: [],
      type_of_sport: req.body.type_of_sport,
    });
    console.log(new_workshop);
    const doc = await new_workshop.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Post successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Post failed" });
  }
});

app.get("/coach/statistics", async (req, res) => {
  try {
    let attributeList;
    const sport = req.query.type_of_sport;
    // Assuming the coach_user_id is passed as a query parameter
    // Retrieve workshops associated with the specified coach_user_id
    await Workshop.find({ type_of_sport: sport }).then((results) => {
      attributeList = results.map((doc) => ({
        content: doc.content,
        participantsCount: doc.participants_id.length, // Get the length of participants_id array
      }));
    });

    console.log(attributeList);

    // Sending the retrieved workshops as a response to the frontend
    res.status(200).json({ attributeList });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve workshops" });
  }
});

//ARUSHU's playground

app.post("/counsellor/postBlog", async (req, res) => {
  try {
    const new_blog = new Blog({
      content: req.body.content,
      title: req.body.content,
      counsellor_username: req.body.counsellor_username,
    });
    console.log(new_blog);
    const doc = await new_reservation.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Blog posted successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Blog posting failed" });
  }
});
app.post("/counsellor/availability", async (req, res) => {
  try {
    const new_availabilty = new Availability({
      day_vector: req.body.day_vector,
      hour_vector: req.body.hour_vector,
      date_slot: req.body.date_slot,
      date_slot_time_vector: req.body.date_slot_time_vector,
      counsellor_user_id: req.body.counsellor_user_id,
    });
    console.log(new_availabilty);
    const doc = await new_reservation.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Availability updated successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Availabilty updating failed" });
  }
});

app.post("/coach/reserveCourt", async (req, res) => {
  try {
    const new_reservation = new SportsBookings({
      time_slot: req.body.time_slot,
      date: req.body.date_slot,
      court_id: req.body.court_id,
      show_up_status: req.body.show_up_status,
      type_of_sport: req.body.type_of_sport,
      time_of_booking: req.body.time_of_booking,
      booking_status: req.body.booking_status,
      user_id: req.body.user_id,
    });
    console.log(new_reservation);
    const doc = await new_reservation.save();
    //Sending the response to the frontend
    res.status(200).json({ message: "Reservation successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Reservation failed" });
  }
});

//Apply functionality

const Blogs_Posted_By_Counsellors =
  require("./models/contentDB").blog_counsellorSchema;

app.get("/self_help", async (req, res) => {
  let attributeList;
  await Blogs_Posted_By_Counsellors.find({}).then((results) => {
    attributeList = results;
    // .map((doc) => [doc.title]);
  });
  let len = attributeList.length;
  let randomIndex = Math.floor(Math.random() * len);
  res.json({ message: attributeList[randomIndex] });
});

const cron = require("node-cron");
const request = require("request");

// Define the URL of your endpoint
const endpointUrl = "http://localhost:6300/booking/sport_booking";

// Define the cron schedule (runs every day at 12:01 AM)
cron.schedule(
  "01 0 * * *",
  () => {
    // Make an HTTP GET request to your endpoint
    request.get(endpointUrl, (error, response, body) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Request sent successfully.");
      }
    });
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);

// Protected route
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: req.user });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Token is required" });
  }

  jsw.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = decoded;
    console.log(decoded);
    next();
  });
}

//Active-Booking
app.post("/badminton/active_booking", async (req, res) => {
  console.log(req.body);

  //Searching for players mongoDB Ids
  const mongodbIds = [];
  try {
    const players = await User.find(
      { username: { $in: req.body.players } },
      "_id username"
    );
    players.forEach((player) => {
      mongodbIds.push(player._id.toString());
    });
    // Log MongoDB IDs
    console.log("MongoDB IDs:", mongodbIds);
    console.log(mongodbIds.length);

    const name = req.body.slot;
    const type_book = req.body.type;
    let book = 1;
    if (type_book == "active") book = 0;
    const hour = parseInt(name.split(":")[0], 10);
    var date = new Date();
    const current_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const booking = new SportsBookings({
      user_id: req.body.user_id,
      time_slot: hour,
      type_of_sport: req.body.sport_type,
      time_of_booking: new Date(),
      date_slot: current_date,
      type_of_booking: book,
      show_up_status: 0,
      court_id: null,
      partners_id: mongodbIds,
      no_partners: mongodbIds.length,
      booking_status: 0,
    });
    const doc = await booking.save();
    res.json(doc);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/checkUser/:username", async (req, res) => {
  // console.log(req.body);
  try {
    const username = req.params.username;
    const user = await User.findOne({ username }); // Assuming username is the field in your database that stores usernames

    if (user) {
      // User exists
      res.json({ exists: true });
    } else {
      // User doesn't exist
      res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//////Pre-booking

app.post("/badminton/pre_booking", async (req, res) => {
  console.log(req.body);

  //Searching for players mongoDB Ids
  const mongodbIds = [];
  try {
    const players = await User.find(
      { username: { $in: req.body.players } },
      "_id username"
    );
    players.forEach((player) => {
      mongodbIds.push(player._id.toString());
    });
    // Log MongoDB IDs
    console.log("MongoDB IDs:", mongodbIds);
    console.log(mongodbIds.length);

    const name = req.body.slot;
    const type_book = req.body.type;
    let book = 1;
    const hour = parseInt(name.split(":")[0], 10);
    var date = new Date();
    const current_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const booking = new SportsBookings({
      user_id: req.body.user_id,
      time_slot: hour,
      type_of_sport: req.body.sport_type,
      time_of_booking: new Date(),
      date_slot: current_date,
      type_of_booking: book,
      show_up_status: 0,
      court_id: null,
      partners_id: mongodbIds,
      no_partners: mongodbIds.length,
      booking_status: 0,
    });
    const doc = await booking.save();
    res.json(doc);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// const Swim_Gym_Memberships =
//   require("./models/bookingsDB").swimGymMembershipsSchema;

// app.get("/get_statistics", async (req, res) => {
//   let attributeList = [];
//   let bookingJanuary = 0;
//   let bookingFebruary = 0;
//   let bookingMarch = 0;
//   let bookingApril = 0;
//   let bookingMay = 0;
//   let bookingJune = 0;
//   let bookingJuly = 0;
//   let bookingAugust = 0;
//   let bookingSeptember = 0;
//   let bookingOctober = 0;
//   let bookingNovember = 0;
//   let bookingDecember = 0;

//   let totalApplied = 0;
//   let totalAccepted = 0;
//   let totalRejected = 0;
//   let totalPending = 0;

//   await Swim_Gym_Memberships.find({ type: 0 })
//     .then((results) => {
//       attributeList.push(
//         ...results.map((doc) => [doc.user_id, doc.month, doc.booking_status])
//       );
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   finalAttributeList = [];
//   let header = [];
//   header.push("Metric");
//   header.push("Value");
//   finalAttributeList.push(header);
//   let headerMonth_1 = [];
//   headerMonth_1.push("January");
//   finalAttributeList.push(headerMonth_1);
//   let headerMonth_2 = [];
//   headerMonth_2.push("February");
//   finalAttributeList.push(headerMonth_2);
//   let headerMonth_3 = [];
//   headerMonth_3.push("March");
//   finalAttributeList.push(headerMonth_3);
//   let headerMonth_4 = [];
//   headerMonth_4.push("April");
//   finalAttributeList.push(headerMonth_4);
//   let headerMonth_5 = [];
//   headerMonth_5.push("May");
//   finalAttributeList.push(headerMonth_5);
//   let headerMonth_6 = [];
//   headerMonth_6.push("June");
//   finalAttributeList.push(headerMonth_6);
//   let headerMonth_7 = [];
//   headerMonth_7.push("July");
//   finalAttributeList.push(headerMonth_7);
//   let headerMonth_8 = [];
//   headerMonth_8.push("August");
//   finalAttributeList.push(headerMonth_8);
//   let headerMonth_9 = [];
//   headerMonth_9.push("September");
//   finalAttributeList.push(headerMonth_9);
//   let headerMonth_10 = [];
//   headerMonth_10.push("October");
//   finalAttributeList.push(headerMonth_10);
//   let headerMonth_11 = [];
//   headerMonth_11.push("November");
//   finalAttributeList.push(headerMonth_11);
//   let headerMonth_12 = [];
//   headerMonth_12.push("December");
//   finalAttributeList.push(headerMonth_12);
//   let headerTotalApplied = [];
//   headerTotalApplied.push("Total Applied");
//   finalAttributeList.push(headerTotalApplied);
//   let headerTotalAccepted = [];
//   headerTotalAccepted.push("Total Accepted");
//   finalAttributeList.push(headerTotalAccepted);
//   let headerTotalRejected = [];
//   headerTotalRejected.push("Total Rejected");
//   finalAttributeList.push(headerTotalRejected);
//   let headerTotalPending = [];
//   headerTotalPending.push("Total Pending");
//   finalAttributeList.push(headerTotalPending);

//   for (i = 0; i < attributeList.length; i++) {
//     if (attributeList[i][1] == 1) {
//       bookingJanuary++;
//     } else if (attributeList[i][1] == 2) {
//       bookingFebruary++;
//     } else if (attributeList[i][1] == 3) {
//       bookingMarch++;
//     } else if (attributeList[i][1] == 4) {
//       bookingApril++;
//     } else if (attributeList[i][1] == 5) {
//       bookingMay++;
//     } else if (attributeList[i][1] == 6) {
//       bookingJune++;
//     } else if (attributeList[i][1] == 7) {
//       bookingJuly++;
//     } else if (attributeList[i][1] == 8) {
//       bookingAugust++;
//     } else if (attributeList[i][1] == 9) {
//       bookingSeptember++;
//     } else if (attributeList[i][1] == 10) {
//       bookingOctober++;
//     } else if (attributeList[i][1] == 11) {
//       bookingNovember++;
//     } else if (attributeList[i][1] == 12) {
//       bookingDecember++;
//     }
//     if (attributeList[i][2] == 0) totalPending++;
//     else if (attributeList[i][2] == 1) totalAccepted++;
//     else totalRejected++;
//     totalApplied++;
//   }
//   finalAttributeList[1].push(bookingJanuary);
//   finalAttributeList[2].push(bookingFebruary);
//   finalAttributeList[3].push(bookingMarch);
//   finalAttributeList[4].push(bookingApril);
//   finalAttributeList[5].push(bookingMay);
//   finalAttributeList[6].push(bookingJune);
//   finalAttributeList[7].push(bookingJuly);
//   finalAttributeList[8].push(bookingAugust);
//   finalAttributeList[9].push(bookingSeptember);
//   finalAttributeList[10].push(bookingOctober);
//   finalAttributeList[11].push(bookingNovember);
//   finalAttributeList[12].push(bookingDecember);
//   finalAttributeList[13].push(totalApplied);
//   finalAttributeList[14].push(totalAccepted);
//   finalAttributeList[15].push(totalRejected);
//   finalAttributeList[1].push(totalPending);

//   res.json({ message: finalAttributeList });
// });
