import React, { useState } from "react";
import user_profile_picture from "../../assets/user_profile_picture.jpeg";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

function Header() {
  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = "good morning!";
  } else if (currentTime < 18) {
    greeting = "good afternoon!";
  } else {
    greeting = "good evening!";
  }

  return (
    <div className="Header">
      <div className="header">
        <div className="navbar"></div>

        <div className="center-text">
          <h1>{greeting}</h1>

          <h2>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h2>
          <h2>
            {new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </h2>
        </div>
        <div className="profile-image">
          <img
            src={user_profile_picture}
            alt="user_profile_picture"
            onClick={() => {
              window.location.pathname = "/History";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
