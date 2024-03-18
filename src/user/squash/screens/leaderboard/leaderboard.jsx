import React, { useState, useEffect } from "react";
import leaderboard from "../../../assets/leaderboard.png";
import "./leaderboard.css";
import SERVER_ROOT_PATH from "../../../../../config";

function Leaderboard() {
  const [message, setMessage] = useState("");
  const fetchInfo = async () => {
    return await fetch(SERVER_ROOT_PATH + "/leaderboard/squash")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .then(() => console.log(message));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="leaderboard">
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(message).map(([name], index) => (
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
              <td>{message[index][0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
