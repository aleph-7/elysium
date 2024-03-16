import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="dataa"> 
    <div className="Subscribe">
      <div className="title">
        <h3>bookings are open for the month of february</h3>
      </div>
      <div className="time-slot">
        <div className="time-slotChild">
          <h3>time-slot</h3>
          <select>
            <option>5:30pm</option>
            <option>4:30pm</option>
            <option>3:30pm</option>
            <option>2:30pm</option>
            <option>1:30pm</option>
          </select>
        </div>
        <div className="trainer">
          <h3>trainer</h3>

          <input type="checkbox"></input>
        </div>
      </div>
      <div className="charges">
        <h3>charges</h3>

        <div className="prices">
          <h3> Rs.350 (males)</h3>
          <br></br>
          <h3> Rs.345 (females)</h3>
        </div>
      </div>
      <div className="paid">
        <h3>paid</h3>
        <input type="text" placeholder="transaction ID"></input>
      </div>
      <div className="apply">
        <button>
          <h3>apply</h3>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;