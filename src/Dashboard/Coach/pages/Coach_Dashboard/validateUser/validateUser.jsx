import React from "react";
import Table from "./../../../components/table/table.jsx";
import "./validateUser.css";

function ValidateUsers() {
  const titles = ["post workshop", "check enrollment","reserve court","statistics", "validate user(s)"];
  const heading = ["name", "roll no.", "time-slot", "status"];
  const data = [
    heading,
    ["Akanksha", "221214", "12:00pm - 1:00pm", "upcoming"],
    ["Sankalp", "220963", "11:00am-12:00pm", "absent"],
    ["Aditi", "220038", "12:00pm-1:00am", "present"],
    ["Rahul", "210967", "1:00am-2:00am", "present"],
  ];
  return (
    <div className="coach-container">
      <Table
        noOfRows={data.length}
        noOfColumns={data[0].length}
        rowEntries={data}
      />
    </div>
  );
}

export default ValidateUsers;
