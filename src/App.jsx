import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}