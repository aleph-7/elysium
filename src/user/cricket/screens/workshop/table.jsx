import React from "react";
import "./table.css";

const Table = ({ noOfRows, noOfColumns, rowEntries }) => {
  let rowEntries_withHeader = [["timings", "content", "apply"], ...rowEntries];
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
    for (let i = 1; i <= noOfRows; i++) {
      rows.push(<tr key={i}>{generateColumns(i)}</tr>);
    }

    return rows;
  };

  const generateColumns = (rowIndex) => {
    const columns = [];
    for (let j = 0; j < noOfColumns - 1; j++) {
      columns.push(
        <td key={j}>
          {rowEntries_withHeader[rowIndex] && rowEntries_withHeader[rowIndex][j]
            ? rowEntries_withHeader[rowIndex][j]
            : ""}
        </td>
      );
    }
    columns.push(
      <td key={noOfColumns - 1}>
        {rowEntries_withHeader[rowIndex] &&
        rowEntries_withHeader[rowIndex][noOfColumns - 1] ? (
          rowEntries_withHeader[rowIndex][noOfColumns - 1] == "apply" ? (
            "apply here!"
          ) : (
            <div className="websiteTableContent-workshop-bookWorkshop">
              <li>
                <h2>{rowEntries_withHeader[rowIndex][2]}</h2>
              </li>
              <l1>
                <button>apply</button>
              </l1>
            </div>
          )
        ) : (
          "welp"
        )}
      </td>
    );

    return columns;
  };

  return (
    <div id="mainTableDiv">
      <table id="websiteTable">
        <div className="websiteTableHeader">
          <thead>{generateTableHeader()}</thead>
        </div>
        <div className="websiteTableContent-workshop">
          <tr>{generateRows()}</tr>
        </div>
      </table>
    </div>
  );
};

export default Table;

/*KS*/
