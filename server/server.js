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
const SportsBookings = require("./models/bookingsDB").sports_bookingsSchema;
const Tutorial = require("./models/contentDB").tutorialSchema;
const Workshop = require("./models/contentDB").sport_workshopSchema;
const Yoga_Sessions = require("./models/contentDB").yoga_sessionSchema;
const Leaderboard = require("./models/leaderboardDB").leaderboardSchema;

app.get("/badminton/leaderboard", async (req, res) => {
  let attributeList;
  await Leaderboard.find({}).then((results) => {
    attributeList = results.map((doc) => [doc.position]);
  });
  res.json({ message: attributeList });
});

app.get("/badminton/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "badminton" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/basketball/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "basketball" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/cricket/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "cricket" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/football/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "football" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/gym/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "gym" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/hockey/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "hockey" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/squash/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "squash" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/swimming/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "swimming" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/table_tennis/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "table_tennis" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/tennis/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "tennis" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

app.get("/volleyball/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "volleyball" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
  });
  res.json({ message: attributeList });
});

//workshops
app.get("/badminton/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "badminton" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/basketball/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "basketball" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/cricket/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "cricket" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/football/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "football" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/hockey/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "hockey" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/squash/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "squash" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/table_tennis/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "table_tennis" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/tennis/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "tennis" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.get("/volleyball/workshops", async (req, res) => {
  let attributeList;
  await Workshop.find({ type_of_sport: "volleyball" }).then((results) => {
    attributeList = results.map((doc) => [
      doc.date_slot +
        "\n" +
        doc.time_slot_start.toString() +
        "hrs to " +
        doc.time_slot_end.toString() +
        "hrs",
      doc.content,
      doc.max_strength.toString() + " slots",
    ]);
  });
  res.json({ message: attributeList });
});

app.post("/signup", async (req, res) => {
  try {
    // Check if the username or email ID already exists in the database
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email_id: req.body.email_id }],
    });

    // If user with the same username or email ID already exists, return an error
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email ID already exists" });
    }

    // Hashing the passwords before saving them to the database
    const hashed_password = await bcrypt.hash(req.body.password, 10);

    // Creating a new user
    const new_user = new User({
      username: req.body.username,
      email_id: req.body.email_id,
      user_category: 1,
      password: hashed_password,
      profile_pic: "",
      type_of_sport: "",
    });

    // Saving the user to the database
    const doc = await new_user.save();

    // Sending the response to the frontend
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    // Sending the error message to the frontend
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  console.log("Login Pressed");
  console.log(req.body.username);
  try {
    user = await User.findOne({ username: req.body.username });
    if (user) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log("Koi Mil Gaya");
      if (passwordMatch) {
        console.log("Password Matched");
        const token = jsw.sign({ username: user.username }, secretKey, {
          expiresIn: "1 hour",
        });
        console.log(token);
        console.log(user.type_of_sport);
        res.status(200).json({
          token,
          userMongoId: user._id,
          userId: user.username,
          email: user.email_id,
          category: user.user_category,
          profile_pic: user.profile_pic,
          type_of_sport: user.type_of_sport,
        });
      } else {
        console.log("Password Mismatch");
        return res.status(401).json({ error: "Authentication failed" });
      }
    } else {
      console.log("Koi Nahi Mila");
      return res.status(401).json({ error: "Authentication failed" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Authentication failed" });
  }
});

// //Bookings
// app.post("/user/sport_booking", async (req, res) => {
//   console.log(req.body);
//   const name = req.body.slot;
//   const hour = parseInt(name.split(":")[0], 10);
//   var date = new Date();
//   const current_date =
//     date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
//   const booking = new Sportsbook({
//     user_id: new ObjectId("65eb03840d088803c56ed544"),
//     time_slot: hour,
//     type_of_sport: "badminton",
//     time_of_booking: new Date(),
//     date: current_date,
//   });
//   const doc = await booking.save();
//   res.json(doc);
// });

//Listening to the server.
app.listen(process.env.PORT || 6300, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});

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

app.post("/coach/reserveCourt", async (req, res) => {
  try {
    const new_reservation = new SportsBookings({
      time_slot : req.body.time_slot,
      date : req.body.date_slot,
      court_id : req.body.court_id,
      show_up_status : req.body.show_up_status,
      type_of_sport : req.body.type_of_sport,
      time_of_booking : req.body.time_of_booking,
      booking_status : req.body.booking_status,
      user_id : req.body.user_id
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
