import { useState } from "react";
import Table from "./table.jsx";
import "./tutorial.css";

const rows = 7;
const columns = 3;
const dummyText = [
  ["topic", "author", "link"],
  ["Row 2, Col 1", "Row 2, Col 2", <button>click here!</button>],
  ["Row 3, Col 1", "Row 3, Col 2", <button>click here!</button>],
  ["Row 2, Col 1", "Row 2, Col 2", <button>click here!</button>],
  ["Row 3, Col 1", "Row 3, Col 2", <button>click here!</button>],
  ["Row 2, Col 1", "Row 2, Col 2", <button>click here!</button>],
  ["Row 3, Col 1", "Row 3, Col 2", <button>click here!</button>],
];
function Tutorial() {
  return (
    <div className="tutorial">
      <Table noOfRows={rows} noOfColumns={columns} rowEntries={dummyText} />
    </div>
  );
}

export default Tutorial;
