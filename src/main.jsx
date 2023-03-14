import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./routes/Home";
import Purchases from "./routes/Purchases";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "purchases",
    element: <Purchases />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
