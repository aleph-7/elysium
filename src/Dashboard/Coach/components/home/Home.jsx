import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="img1">
        <img src="https://th.bing.com/th/id/OIP.UYwZu0U1SDrLHPIkds3ZQAHaE-?w=224&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>

        <div className="text1">
          <h4>avail all facilities!</h4>
          <h1>subscribe</h1>
        </div>
      </div>

      <div className="img2">
        <img src="https://th.bing.com/th/id/OIP.Qn95Gl64Qii8tK0ef9zEYgHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>

        <div className="text2">
          <h1>tutorials</h1>
          <h4>you can learn too!</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
