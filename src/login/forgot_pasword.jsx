import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import SERVER_ROOT_PATH from "../../config";
import MyLottieAnimation from "./animation";
import { set } from "mongoose";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email_id: "",
  });

  const [error, setError] = useState({
    email_id: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email_id":
          if (!value) {
            stateObj[name] = "";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const onClickLogin = async () => {
    if (!input.email_id) {
      setError((prev) => ({ ...prev, username: "E-Mail is required." }));
    }
    setLoading(true);
    try {
      const response = await fetch(SERVER_ROOT_PATH + "/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input.email_id,
        }),
      })
        .then((response) => {
          // Check status code
          if (response.status == 200) {
            return response.json(); // Parse JSON response on success
          } else if (response.status == 500) {
            alert("Invalid email address. Please enter a valid email address.");
          } else {
            throw new Error("Login failed"); // Handle errors
          }
        })
        .then((data) => {
          // Success
          console.log("Email success:", data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          // Handle errors (401, 400, 500, network errors, etc.)
          console.error("Login error:", error);
          // Display appropriate error message to the user
        });
    } catch (error) {
      setLoading(false);
      console.error("Error during Forgot Password:", error);
    }
  };

  return loading ? (
    <div>
      <MyLottieAnimation />
    </div>
  ) : (
    <div className="login-container-master-div">
      <div className="login-container">
        <div className="login-content">
          <div className="login-inputs">
            <div className="login-input2">
              <input
                type="text"
                name="email_id"
                placeholder="IITK email ID"
                value={input.email_id}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.email_id && <span className="err">{error.email_id}</span>}
            </div>
          </div>
          <div className="login-submit-container">
            <button className="login-submit" onClick={onClickLogin}>
              send mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
