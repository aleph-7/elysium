import React, { useState } from "react";
import leaderboard from "../../../assets/leaderboard.png";
import "./leaderboard.css";
const leaders = {
  "kushagra srivastava": "1400",
  "aditi khandelia": "1200",
  "animesh madaan": "1000",
  "mahaarajan j": "800",
  "shubham kumar": "600",
  "akanksha wattamwar": "400",
  "ishan ranjan": "200",
  "sitesh raj": "100",
};

function Leaderboard() {
  return (
    <div className="leaderboard">
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(leaders).map(([name, score], index) => (
            <tr key={name}>
              {index < 3 ? (
                <td className="head-text">
                  <div className="head-image">
                    <img src={leaderboard} alt="leaderboard" />
                  </div>
                  <div className="text-on-image">
                    <p>{index + 1}.</p>
                  </div>
                </td>
              ) : (
                <td>{index + 1}</td>
              )}
              <td>{name}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
