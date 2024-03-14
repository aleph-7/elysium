import React from "react";
import "./checkEnrolment.css";
import Button from "../../../components/buttons/Button.jsx";
// import Header from "../../../header/Header.jsx";
// import Taskbar from "../../../components/taskbar/Taskbar.jsx";

function CheckEnrolment() {
  return (
      <div className="container">
        <div className="dropdown">
          <button className="dropbtn">Spring Camp</button>
          <div class="dropdown-content">
            <a href="#">Summer Camp</a>
            <a href="#">Winter Camp</a>
            <a href="#">Spring Camp</a>
          </div>
        </div>
        <div className="text">
          <p>number of enrolled players : 2</p>
        </div>
        <div className="info" style={{ left: "6vw", top: "194px" }}>
          <p style={{ lineHeight: "1" }}>
            <strong>Name</strong>
          </p>
          <p style={{ lineHeight: "1" }}>Akanksha</p>
          <p style={{ lineHeight: "1" }}>Sankalp</p>
        </div>
        <div className="info" style={{ left: "6vw", top: "361.5px" }}>
          <p style={{ lineHeight: "1" }}>
            <strong>Name</strong>
          </p>
          <p style={{ lineHeight: "1" }}>Akanksha</p>
          <p style={{ lineHeight: "1" }}>Sankalp</p>
        </div>
        <div className="info" style={{ left: "25.5vw", top: "194px" }}>
          <p style={{ lineHeight: "1" }}>
            <strong>Roll No</strong>
          </p>
          <p style={{ lineHeight: "1" }}>221214</p>
          <p style={{ lineHeight: "1" }}>220963</p>
        </div>
        <div className="info" style={{ left: "25.5vw", top: "361.5px" }}>
          <p style={{ lineHeight: "1" }}>
            <strong>Roll No</strong>
          </p>
          <p style={{ lineHeight: "1" }}>221214</p>
          <p style={{ lineHeight: "1" }}>220963</p>
        </div>
        <div
          className="info"
          style={{ left: "43vw", top: "194px", width: "361.5px" }}
        >
          <p style={{ lineHeight: "1" }}>
            <strong>Email Id</strong>
          </p>
          <p style={{ lineHeight: "1" }}>akankshab22@iitk.ac.in</p>
          <p style={{ lineHeight: "1" }}>sankalpm22@iitk.ac.in</p>
        </div>
        <div
          className="info"
          style={{ left: "43vw", top: "361.5px", width: "361.5px" }}
        >
          <p style={{ lineHeight: "1" }}>
            <strong>Status</strong>
          </p>
          <div style={{ left: "0px", top: "32px", position: "absolute"}}>
            <Button
              backgroundColor="#FF820E"
              size={2}
              textColor={1}
              text="accept"
            />
          </div>
          <div style={{ left: "0px", top: "70px", position: "absolute" }}>
            <Button
              backgroundColor="#22992E"
              size={2}
              textColor={1}
              text="accepted"
            />
          </div>
        </div>
      </div>
  );
}

export default CheckEnrolment;
