import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="img1">
        <img src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2023/02/Top-gyms-in-Nagpur.jpg?fit=1000%2C667&ssl=1"></img>

        <div className="text1">
          <h4>avail all facilities!</h4>
          <h1>subscribe</h1>
        </div>
      </div>

      <div className="img2">
        <img src="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg"></img>

        <div className="text2">
          <h1>tutorials</h1>
          <h4>you can learn too!</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;