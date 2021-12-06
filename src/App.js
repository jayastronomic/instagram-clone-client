import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./registrations/Login";
import Signup from "./registrations/Signup";

function App() {
  return (
    <Routes className="App">
      <Route path="/design" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
