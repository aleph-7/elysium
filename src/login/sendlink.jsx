import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Sendlink = () => {
  return (
    <div className="container-master">
      <div className="container">
        <div className="content">
          <div className="inputs">
            <div className="input">
              <input type="email" placeholder="email-id" />
            </div>
          </div>
          <div className="submit-container">
            <button className="submit">
              {" "}
              <Link
                to="/signup "
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                send link
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sendlink;
