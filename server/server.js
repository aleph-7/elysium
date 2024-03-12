const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
require("dotenv").config();
const jsw = require("jsonwebtoken");
const { ObjectId } = require("bson");

const app = express();
app.use(cors());
app.use(parser.json());
// mongoose.connect(process.env.MONGODB_User);
// mongoose2.connect(process.env.MONGODB_Booking);

// //Creating a schema for mongoDB database
// const contactSchema = mongoose.Schema({
//   username: String,
//   email_id: String,
//   user_category: Number,
//   password: String,
//   profile_pic: String,
// });

// const bookingSchema = mongoose.Schema({
//   user_id: mongoose.ObjectId,
//   time_slot: Number,
//   date_slot: String,
//   counsellor_user_id: mongoose.ObjectId,
//   booking_status: Number,
//   time_of_booking: Date,
// });

// const User = mongoose.model("user", contactSchema);
// const Booking = mongoose2.model("sport_bookings", bookingSchema);

const DBs = require("./model");
const User = DBs.userSchema;
const Booking = DBs.bookingSchema;
const Tutorial = DBs.tutorialSchema;

app.get("/tutorials", async (req, res) => {
  let attributeList;
  await Tutorial.find({ type_of_sport: "gym" }).then((results) => {
    attributeList = results.map((doc) => [doc.title, doc.source, doc.link]);
    // console.log(attributeList); // Array containing the retrieved attribute values
  });
  // res.json(attributeList);
  res.json({ message: attributeList });
  // // console.log(tutorials);

  // console.log(attributeList);
});

//Saving the data from frontend when a post request is posted
app.post("/signup", async (req, res) => {
  const new_user = new User({
    username: req.body.username,
    email_id: req.body.email_id,
    user_category: 0,
    password: req.body.password,
    profile_pic: "",
  });
  const doc = await new_user.save();
  res.json(doc);
});

app.post("/login", async (req, res) => {
  console.log("Login Pressed");
  console.log(req.body.username);
  user = await User.findOne({ username: req.body.username });
  if (user) {
    console.log("Koi Mil Gaya");
    if (user.password === req.body.password) {
      console.log("Password Matched");
      const token = jsw.sign(
        { username: user.username },
        "a3e31fd2b7ed999b65ee2653024297b9f737e282afb9b686d8401e10c617a591",
        {
          expiresIn: "1 hour",
        }
      );
      console.log(token);
      res.json(token);
    } else {
      console.log("Password Mismatch");
    }
  } else {
    console.log("Koi Nahi Mila");
  }
});

//Sending the data to the frontend when a get method is posted
app.get("/", async (req, res) => {
  const docs = await User.find({});
  const latest = docs.pop();
  res.send(latest.name + " just sent a message for you !!!!");
});

//Listening to the server.
app.listen(process.env.PORT || 5090, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});
