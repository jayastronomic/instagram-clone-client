import React from "react";
import { Routes, Route } from "react-router-dom";
import "../src/styles/App.css";

import Login from "./registrations/Login";
import Signup from "./registrations/Signup";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { currentUser } from "./seedData/currentUser";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/design"
        element={
          <div className="flex items-center justify-center h-screen design-bg"></div>
        }
      />
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home {...currentUser} />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
