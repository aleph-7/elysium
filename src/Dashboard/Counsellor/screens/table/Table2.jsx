import React from "react";
import "./table2.css";

const Table2 = ({ noOfRows, noOfColumns, rowEntries }) => {
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
    <div className="counsellor-table2">
      <div id="mainTableDiv2">
        <table
          id="websiteTableHeader2"
          style={{ fontFamily: "Junge, Poppins, sans-serif" }}
        >
          <tbody>{generateTableHeader()}</tbody>
        </table>
        <table id="websiteTableContent2">
          <tbody>{generateRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
