import { useState } from "react";
import dolarImg from "./assets/dolar.webp";
import "./App.css";
import Form from "./Form";
import Menu from "./Menu";
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <Menu />
      <Logo />
      <Form />
    </div>
  );
}

export default App;
