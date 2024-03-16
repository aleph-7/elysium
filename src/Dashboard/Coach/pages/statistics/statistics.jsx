import React from "react";
import { useEffect, useState } from "react";
import "./statistics.css";
import SERVER_ROOT_PATH from "../../../../../config.js";
let enrolledPlayers = 2;

function CheckEnrolment() {
  const [workshop, setWorkshop] = React.useState("");
  const fetchWorkshop = async () => {
    return await fetch(
      SERVER_ROOT_PATH +
        "/coach/getWorkshops?type_of_sport=" +
        localStorage.getItem("type_of_sport")
    )
      .then((res) => res.json())
      .then((data) => workshop);
  };
  useEffect(() => {
    fetchWorkshop();
    console.log(workshop);
  }, []);
  return (
    <div className="coach-check-enrollment-container">
      <div className="check-enrollment-coach">
        <h2>number of enrolled players : {enrolledPlayers}</h2>
      </div>
    </div>
  );
}

export default CheckEnrolment;
