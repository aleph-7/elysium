const express = require("express");
const Leaderboard_Badminton =
  require("../models/leaderboardDB").badmintonLeaderboardSchema;
const Leaderboard_Squash =
  require("../models/leaderboardDB").squashLeaderboardSchema;
const Leaderboard_Tennis =
  require("../models/leaderboardDB").tennisLeaderboardSchema;
const Leaderboard_TableTennis =
  require("../models/leaderboardDB").tabletennisLeaderboardSchema;
const user = require("../models/userDB").userSchema;
const router = express.Router();

router.get("/badminton", async (req, res) => {
  let attributeList;
  var finalattributeList = [];
  await Leaderboard_Badminton.find({}).then((results) => {
    attributeList = results.map((doc) => [doc.user_id, doc.position]);
  });
  for (let i = 0; i < attributeList.length; i++) {
    let user_id = attributeList[i][0];
    console.log(user_id);
    try {
      let user_name = (await user.findOne({ _id: user_id })).username;
      console.log(user_name);
      finalattributeList.push([user_name, attributeList[i][1]]);
    } catch (err) {
      console.log(err);
    }
  }
  finalattributeList.sort((a, b) => a[1] - b[1]);
  res.json(finalattributeList);
});

module.exports = router;