import React, { useState } from "react";
import "./reserve.css";
import Button from "./../../Button/Button";
function Reserve() {
  const handleClick = () => {
    // Add your button click event handler here
  };
  const buttonLocation = {
    position: 'relative',
    top: '50px',
    right : "-500px"
  };
    return (
    <div className="gym-reserve-container">
      <div className="input-container">
        <input type="text" className="slot" placeholder="slot" />
        <input type="text" className="batch_size" placeholder="batch size"/>
        <div className="dates">
          <input type="text" className="startDate" placeholder="start date" />
          <div className="text">To</div> 
          <input type="text" className="endDate" placeholder="end date" />
        </div>
        <div className="time">
          <input type="text" className="startTime" placeholder="start time"/>
          <div className="text">To</div> 
          <input type="text" className="endTime" placeholder="end time"/>
        </div>
        <div className="button-container">
          <Button
          backgroundColor= "#22992E"
          size= {3}
          textColor= {1}
          text={"Reserve"}
          >
          Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
