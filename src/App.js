import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./registrations/Login";
import Signup from "./registrations/Signup";
import Nav from "./components/Nav";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<UserProfile />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
