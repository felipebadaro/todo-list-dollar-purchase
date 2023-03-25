import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Outlet />
    </div>
  );
}

export default App;
