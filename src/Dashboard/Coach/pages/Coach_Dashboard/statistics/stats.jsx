import React from "react";
import Table from "./../../../components/table/table";
import "./stats.css";

function Statistics() {
  const heading = ["workshop name", "time-slot", "no. of players"];
  const data = [
    heading,
    ["spring camp", "1:00pm-2:00pm", "13"],
    ["Its all about stamina", "11:00am-12:00pm", "35"],
    ["Its all about stamina", "12:00pm-1:00am", "44"],
    ["Its all about stamina", "1:00am-2:00am", "10"],
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

export default Statistics;
