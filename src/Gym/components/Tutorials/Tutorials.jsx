import React from "react";
import "./tutorials.css";
import Item1 from "./items/Item1";
import Item2 from "./items/Item2";

const Tutorials = () => {
  return (
    <div className="Tutorials">
      <div className="heading">
        <h3 className="topic">topic</h3>
        <h3 className="author">author</h3>
        <h3 className="link">link</h3>
      </div>
      <br></br>
      <div className="data">
        <Item1></Item1>

        <Item2></Item2>

        <br></br>
      </div>
    </div>
  );
};

export default Tutorials;