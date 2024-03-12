import React,{ useState } from "react";
import "./home.css";
import Yoga2 from '../../assets/yoga2.png';
import Yoga from "../../assets/Yoga1.png";


function home() {
  return (
    <div className="Page1">
      <div className="grid">
        <div className="first">
            <div className="back">
                <img src={Yoga} className="img1"/>
            </div>
            <div className="content1">
              <div className="text1">avail all facilities!</div>
              <div className="text2">subscribe</div>
            </div>
        </div>
        <div className="second">
        <div className="back">
          <img src={Yoga2} className="img1" />
        </div>
        <div className="content2">blogs</div>
        </div>
      </div>
    </div>
  );
}

export default home;
