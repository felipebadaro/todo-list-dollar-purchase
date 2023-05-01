import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Purchases from "./routes/Purchases";
import ErrorPage from "./routes/ErrorPage";
import { PurchasesProvider } from "./contexts/PurchasesContext";

const FormContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/purchases",
        element: <Purchases />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PurchasesProvider>
      <RouterProvider router={router} />
    </PurchasesProvider>
  </React.StrictMode>
);
