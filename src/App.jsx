import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

import { Outlet } from "react-router-dom";

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
