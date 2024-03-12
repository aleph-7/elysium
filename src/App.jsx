import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
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
import LP1 from "./Landing_Page1/LP1.jsx";
import LP2 from "./Landing_Page2/LP2.jsx";
import Signup from "./login/signup.jsx";
import Login from "./login/login";
import History from "./History/History.jsx";
import Gym from "./Gym/Gym.jsx";
import Yoga from "./yoga/Yoga.jsx";
import Counsellor from "./counsellor/Counsellor.jsx";
import Swim from "./swimming/Swim.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LP1 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/yoga",
    element: <Yoga />,
  },
  {
    path: "/History",
    element: <History />,
  },
  {
    path: "/LP2",
    element: <LP2 />,
  },
  {
    path: "/football",
    element: <Football />,
  },
  {
    path: "/squash",
    element: <Squash />,
  },
  {
    path: "/cricket",
    element: <Cricket />,
  },
  {
    path: "/hockey",
    element: <Hockey />,
  },
  {
    path: "/tennis",
    element: <Tennis />,
  },
  {
    path: "/tabletennis",
    element: <Tabletennis />,
  },
  {
    path: "/badminton",
    element: <Badminton />,
  },
  {
    path: "/basketball",
    element: <Basketball />,
  },
  {
    path: "/volleyball",
    element: <Volleyball />,
  },
  {
    path: "/gym",
    element: <Gym />,
  },
  {
    path: "/counsellor",
    element: <Counsellor />,
  },
  {
    path: "/swimming",
    element: <Swim />,
  },
]);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
