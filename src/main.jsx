import React from "react";
import ReactDOM from "react-dom/client";
import Badminton from "./badminton/Badminton";
import Basketball from "./basketball/Basketball";
import Cricket from "./cricket/Cricket";
import Football from "./football/Football";
import Hockey from "./hockey/Hockey";
import Squash from "./squash/Squash";
import Tabletennis from "./tabletennis/Tabletennis";
import Tennis from "./tennis/Tennis";
import Volleyball from "./volleyball/Volleyball";
import {Route,Routes} from "react-router-dom";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);


// <Header></Header>
// <CardStack_sport />