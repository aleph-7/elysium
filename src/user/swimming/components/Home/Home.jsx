import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="img1">
        <img src="https://www.iitk.ac.in/inacomm15/demo/Swimming%20Pool_a.JPG"></img>

        <div className="text1">
          <h4>avail all facilities!</h4>
          <h1>subscribe</h1>
        </div>
      </div>

      <div className="img2">
        <img src="https://www.iitk.ac.in/futurestudents/life/sports/aquatics.jpg"></img>

        <div className="text2">
          <h1>tutorials</h1>
          <h4>you can learn too!</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;