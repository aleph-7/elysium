import { useState } from "react";
import Table from "./table.jsx";
import "./workshop.css";

const rows = 7;
const columns = 3;
const dummyText = [
  ["when?", "coach", "availibility"],
  ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"],
  ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3"],
  ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"],
  ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3"],
  ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"],
  ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3"],
];
function Workshop() {
  return (
    <div className="workshop">
      <Table noOfRows={rows} noOfColumns={columns} rowEntries={dummyText} />
    </div>
  );
}

export default Workshop;
