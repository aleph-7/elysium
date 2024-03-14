import React from "react";
import "./tutorials.css";
import Items from "./items/Items";

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
        <Items></Items>

        <Items></Items>

        <br></br>
      </div>
    </div>
  );
};

export default Tutorials;
