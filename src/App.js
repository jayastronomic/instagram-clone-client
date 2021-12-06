import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./registrations/Login";

function App() {
  return (
    <Routes className="App">
      <Route path="/design" />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
