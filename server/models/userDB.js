const { default: mongoose } = require("mongoose");
const { connectUserDB } = require("../databases/userDB");

const userSchema = mongoose.Schema({
  username: String,
  email_id: String,
  user_category: Number,
  password: String,
  profile_pic: String,
  type_of_sport: String,
});

const { userDB } = connectUserDB();
module.exports = {
  userSchema: userDB.model("user", userSchema),
};
