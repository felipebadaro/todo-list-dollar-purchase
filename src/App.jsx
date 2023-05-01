import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import { GlobalStyle } from "./components/styles/Globals";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Logo />
      <Outlet />
    </div>
  );
}

export default App;
