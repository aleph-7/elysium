import React from 'react';
import './table.css';

const Table = ({ noOfRows, noOfColumns, rowEntries, Headline}) => {
    const generateRows = () => {
      const rows = [];
      for (let i = 0; i < noOfRows; i++) {
        rows.push(
          <tr key={i}>
            {generateColumns(i)}
          </tr>
        );
      }
  
      return rows;
    };
  
    const generateColumns = (rowIndex) => {
      const columns = [];
      const columnWidth = `${100 / noOfColumns}%`;
      for (let j = 0; j < noOfColumns; j++) {
        columns.push(
          <td key={j} style={{ width: columnWidth }}>
            {rowEntries[rowIndex] && rowEntries[rowIndex][j] ? rowEntries[rowIndex][j] : ''}
          </td>
        );
      }
  
      return columns;
    };
  
    return (
        <div id="UpcomingBookingsMainDiv">
          <h2 id="UpcomingBookingsHeadline">{Headline}</h2>
          <div id="UpcomingBookingsSubDiv">
            <table id="websiteTableContent">
                <tbody>
                {generateRows()}
                </tbody>
            </table>
          </div>
        </div>
    );
  };

export default Table;
