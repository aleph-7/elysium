import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import Basketball from "./user/basketball/Basketball";
import Cricket from "./user/cricket/Cricket";
import Volleyball from "./user/volleyball/Volleyball.jsx";
import Badminton from "./user/badminton/Badminton";
import Tennis from "./user/tennis/Tennis";
import TableTennis from "./user/tabletennis/TableTennis.jsx";
// import Swim from "./user/swimming/Swim.jsx";
import Squash from "./user/squash/Squash";
import Football from "./user/football/Football";
import Hockey from "./user/hockey/Hockey";

import Gym from "./Gym/Gym.jsx";

// import Volleyball from "./volleyball/Volleyball";
// import LP1 from "./Landing_Page1/LP1.jsx";
// import LP2 from "./Landing_Page2/LP2.jsx";
import Signup from "./login/signup.jsx";
import Login from "./login/login";
import History from "./user/history/History.jsx";
// import Counsellor from "./counsellor/Counsellor.jsx";

// import ProtectedRoute from "./protected_routes.jsx";
// import Yoga_Instructor from "./Dashboard/Yoga_Instructor/Yoga_Instructor.jsx";
import Coach_Dashboard from "./Dashboard/Coach/Coach_Dashboard.jsx";
import SERVER_ROOT_PATH from "../config.js";
import Yogaa from "./user/yoga/Yogaa.jsx";
// import Coach from "./Dashboard/Coach/Coach.jsx";

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      {/* <LP1 /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/History" element={<History />} />
          {/*  */}
          {/* <Route path="/LP1" element={<LP1 />} />

          /* <Route index element={<Login />} />
          <Route path="/LP1" element={<LP1 />} />
          <Route path="/login" element={<Login />} />
          
          */}
          {/*  */}
          {/* <Route path="/LP2" element={<LP2 />} /> */}
          {/* 
         
          

          
          
          <Route path="/badminton" element={<Badminton />} /> */}
          {/* <Route path="/admin/coach" element={<Coach_Dashboard />} /> */}
          {/*  
          
          <Route path="/counsellor" element={<Counsellor />} />
         
          <Route path="/admin/yoga" element={<Yoga_Instructor />} /> */}
          <Route path="/admin/coach" element={<Coach_Dashboard />} />

          {/* /* Sport Pages */}
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/volleyball" element={<Badminton />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/tabletennis" element={<TableTennis />} />
          {/* <Route path="/swimming" element={<Swim />} /> */}
          <Route path="/squash" element={<Squash />} />
          <Route path="/football" element={<Football />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/yoga" element={<Yogaa />} />
          {/* <Route path="/gym" element={<Gym />} />
           */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
