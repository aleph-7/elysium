import React from "react";
import "./table.css";
//import Info from "./info";

let accepted = 0;
let rejected = 0;

const Table = ({ noOfRows, noOfColumns, rowEntries }) => {
  const generateTableHeader = () => {
    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push(
        <tr key={i} id="tableHeaderRow">
          {generateColumnsHeader()}
        </tr>
      );
    }

    return rows;
  };
  const generateRows = () => {
    const rows = [];
    if (noOfRows == 0) {
      return (
        <tr>
          <td>get going and play!</td>
        </tr>
      );
    }
    for (let i = 0; i < noOfRows; i++) {
      rows.push(<tr key={i}>{generateColumns(i)}</tr>);
    }

    return rows;
  };

  const generateColumnsHeader = () => {
    const columns = [];
    const columnWidth = `${100 / noOfColumns}%`;
    let rows = ["counsellor username", "day/date", "timing"];
    for (let j = 0; j < 3; j++) {
      columns.push(
        <td key={j} style={{ width: columnWidth }}>
          {rows && rows[j] ? rows[j] : ""}
        </td>
      );
    }

    return columns;
  };
  const generateColumns = (rowIndex) => {
    const columns = [];
    const columnWidth = `${100 / noOfColumns}%`;
    for (let j = 0; j < 3; j++) {
      columns.push(
        <td key={j} style={{ width: columnWidth }}>
          {rowEntries[rowIndex] && rowEntries[rowIndex][j]
            ? rowEntries[rowIndex][j]
            : ""}
        </td>
      );
    }
  
    rowEntries[rowIndex] &&
    (rowEntries[rowIndex][2] == 0 || rowEntries[rowIndex][2])
      ? rowEntries[rowIndex][2] == 1
        ? (accepted = accepted + 1)
        : rowEntries[rowIndex][2] == -1
        ? (rejected = rejected + 1)
        : (accepted = accepted)
      : "";
    return columns;
  };

  return (
    <div id="mainTableDiv">
      <table
        id="websiteTableHeader"
        style={{ fontFamily: "Junge, Poppins, sans-serif" }}
      >
        <tbody>{generateTableHeader()}</tbody>
      </table>
      <div className="tableBookingDiv">
        <table id="websiteTableContent">
          <tbody>{generateRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

