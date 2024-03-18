import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import Signup from "./login/signup.jsx";
import Login from "./login/login";

//User Pages
import ProtectedRoute_User from "./protected_routes_user.jsx";
import Basketball from "./user/basketball/Basketball";
import Cricket from "./user/cricket/Cricket";
import Volleyball from "./user/volleyball/Volleyball.jsx";
import Badminton from "./user/badminton/Badminton";
// import Tennis from "./user/tennis/Tennis";
// import TableTennis from "./user/tabletennis/TableTennis.jsx";
// import Squash from "./user/squash/Squash";
import Football from "./user/football/Football";
import Hockey from "./user/hockey/Hockey";
// import Counsellor from "./counsellor/Counsellor.jsx";
// import Yoga_Instructor from "./Dashboard/Yoga_Instructor/Yoga_Instructor.jsx";
import Coach_Dashboard from "./Dashboard/Coach/Coach_Dashboard.jsx";
import Yogaa from "./user/yoga/Yogaa.jsx";
import Swimming from "./user/swimming/Swimming.jsx";
import Self_help from "./user/self-help/self_help.jsx";

// import LP1 from "./Landing_Page1/LP1.jsx";
// import LP2 from "./Landing_Page2/LP2.jsx";
// import History from "./user/history/History.jsx";

import SERVER_ROOT_PATH from "../config.js";

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
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute_User />}>
            <Route path="/home" element={<Badminton />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/volleyball" element={<Volleyball />} />
            <Route path="/badminton" element={<Badminton />} />
            {/* <Route path="/tennis" element={<Tennis />} />
            <Route path="/tabletennis" element={<TableTennis />} /> */}
            <Route path="/swimming" element={<Swimming />} />
            {/* <Route path="/squash" element={<Squash />} /> */}
            <Route path="/football" element={<Football />} />
            <Route path="/hockey" element={<Hockey />} />
            <Route path="/yoga" element={<Yogaa />} />
            <Route path="/self-help" element={<Self_help />} />
          </Route>
          <Route path="/admin/coach" element={<Coach_Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
