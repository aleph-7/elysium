import React from "react";
import "./table1.css";

const Table1 = ({ noOfRows, noOfColumns, rowEntries }) => {
  const generateTableHeader = () => {
    const rows = [];
    for (let i = 0; i < 1; i++) {
      rows.push(
        <tr key={i} id="tableHeaderRow">
          {generateColumns(i)}
        </tr>
      );
    }

    return rows;
  };
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i < noOfRows; i++) {
      rows.push(<tr key={i}>{generateColumns(i)}</tr>);
    }

    return rows;
  };

  const generateColumns = (rowIndex) => {
    const columns = [];

    for (let j = 0; j < noOfColumns; j++) {
      columns.push(
        <td key={j}>
          {rowEntries[rowIndex] && rowEntries[rowIndex][j]
            ? rowEntries[rowIndex][j]
            : ""}
        </td>
      );
    }

    return columns;
  };

  return (
    <div className="counsellor-table1">
      <div id="mainTableDiv1">
        <table
          id="websiteTableHeader1"
          style={{ fontFamily: "Junge, Poppins, sans-serif" }}
        >
          <tbody>{generateTableHeader()}</tbody>
        </table>
        <table id="websiteTableContent1">
          <tbody>{generateRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;
