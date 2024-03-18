import React from "react";
import "./stats.css";
import Table from "../table/Table1";
import Taskbar from "../taskbar/Taskbbar";
const Stats = () => {
  return (
    <div className="counsellor-stats">
      {/* <Table
        noOfRows={1}
        noOfColumns={2}
        rowEntries={[["Overall", "Statistics"]]}
      ></Table> */}
      <div>
        <div className="heading1">
          <div className="overall">
            <p>Overall</p>
          </div>
          {/* <div className="space"></div> */}
          <div className="statistics">
            <p>Statistics</p>
          </div>
        </div>
        <div className="data">
          <div className="text">
            <p>Number of sessions done overall:</p>
          </div>
          <div className="numbers">
            <p>1345</p>
          </div>
        </div>
      </div>
      <div>
        <div className="heading2">
          <div className="overall">
            <p></p>
          </div>
          {/* <div className="space"></div> */}
          <div className="statistics">
            <p></p>
          </div>
        </div>
        <div className="data">
          <div className="text">
            <p>Average number of sessions done per week:</p>
          </div>
          <div className="numbers">
            <p>54</p>
          </div>
        </div>
      </div>
      <div>
        <div className="heading2">
          <div className="overall">
            <p></p>
          </div>
          {/* <div className="space"></div> */}
          <div className="statistics">
            <p></p>
          </div>
        </div>
        <div className="data">
          <div className="text">
            <p>Average number of sessions done per month:</p>
          </div>
          <div className="numbers">
            <p>18</p>
          </div>
        </div>
      </div>
      <div>
        <div className="heading2">
          <div className="overall">
            <p></p>
          </div>
          {/* <div className="space"></div> */}
          <div className="statistics">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
