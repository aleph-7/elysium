const { default: mongoose } = require("mongoose");
const { connectLeaderboardDBs } = require("../databases/leaderboardDB");

const leaderboardSchema = mongoose.Schema({
  user_id: mongoose.ObjectId,
  position: Number,
});

const { leaderboardDB } = connectLeaderboardDBs();
module.exports = {
  leaderboardSchema: leaderboardDB.model("badminton", leaderboardSchema),
};
