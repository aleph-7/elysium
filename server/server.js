const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
require("dotenv").config();
const jsw = require("jsonwebtoken");
const { ObjectId } = require("bson");

const app = express();
app.use(cors());
app.use(parser.json());

const DBs = require("./model");
const User = DBs.userSchema;
const Booking = DBs.bookingSchema;
const Tutorial = DBs.tutorialSchema;
const Workshop = DBs.workshopSchema;

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
