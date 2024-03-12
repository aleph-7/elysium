import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
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
        case "username":
          if (!value) {
            stateObj[name] = "";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "";
          }

        default:
          break;
      }

      return stateObj;
    });
  };

  const onClickLogin = async () => {
    if (!input.username) {
      setError((prev) => ({ ...prev, username: "Username is required." }));
    }
    if (!input.password) {
      setError((prev) => ({ ...prev, password: "Password is required." }));
    }
    try {
      const response = await fetch("http://localhost:6300/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.username,
          password: input.password,
        }),
      });

      if (response.ok) {
        console.log("Signup successful!");
        // Redirect or perform any other action upon successful signup
      } else {
        console.error("Signup failed.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="login-container-master">
      <div className="login-container">
        <div className="login-content">
          <div className="login-inputs">
            <div className="login-input2">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={input.username}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.username && <span className="err">{error.username}</span>}
            </div>
            <div className="login-input2">
              <form>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={input.password}
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.password && (
                  <span className="err">{error.password}</span>
                )}
              </form>
            </div>
          </div>
          <div className="login-submit-container">
            <button className="login-submit" onClick={onClickLogin}>
              login
            </button>
            {/*}
            <button className="confirmEmail" onClick={verifyEmail}>verify email!
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
