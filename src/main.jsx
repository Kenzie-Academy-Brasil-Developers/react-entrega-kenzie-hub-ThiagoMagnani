import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Components/providers/ProductContext";
import { RoutesMain } from "./Components/Routes/RoutesMain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
