import { useState } from "react";
import "./statistics.css";
import Table from "./table";

function Statistics() {
  const rows = 4;
  const columns = 2;
  const rowEntries = [
    ["Overall", "Statistics"],
    ["Number of sessions done overall :", "24"],
    ["Average number of participants in each session :", "22"],
    ["Average number of sessions done per month :", "16"],
  ];
  return (
    <div className="yoga-statistics-container">
      <Table noOfRows={rows} noOfColumns={columns} rowEntries={rowEntries} />
    </div>
  );
}

export default Statistics;
