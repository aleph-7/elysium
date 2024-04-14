import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import SERVER_ROOT_PATH from "../../config";
import MyLottieAnimation from "./animation";
import { set } from "mongoose";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
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
        case "password":
          if (!value) {
            stateObj[name] = "";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const onClickLogin = async () => {
    if (!input.password) {
      setError((prev) => ({ ...prev, password: "Password is required." }));
    }
    if (!input.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Confirm Password is required.",
      }));
    }
    if (
      input.password &&
      input.confirmPassword &&
      input.password !== input.confirmPassword
    ) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Password and Confirm Password does not match.",
      }));
    }
    if (error.password || error.confirmPassword) {
      alert("Please enter valid details.");
      return;
    }
    if (input.password === "") {
      alert("Please enter valid details.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(SERVER_ROOT_PATH + "/reset_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: window.location.search.split("=")[1],
          password: input.password,
        }),
      })
        .then((response) => {
          // Check status code
          if (response.status == 200) {
            return response.json(); // Parse JSON response on success
          } else if (response.status == 401) {
            alert("Invalid Link");
            setLoading(false);
          } else {
            throw new Error("Login failed"); // Handle errors
          }
        })
        .then((data) => {
          // Success
          alert("Password Reset Successfully");
          console.log("Password Reset", data);
          setLoading(false);
        })
        .catch((error) => {
          alert("Invalid Link");
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
                type="password"
                name="password"
                placeholder="password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.password && <span className="err">{error.password}</span>}
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.confirmPassword && (
                <span className="err">{error.confirmPassword}</span>
              )}
            </div>
          </div>
          <div className="login-submit-container">
            <button className="login-submit" onClick={onClickLogin}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
