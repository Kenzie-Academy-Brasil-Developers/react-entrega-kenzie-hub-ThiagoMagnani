import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/ProductContext";
import { RoutesMain } from "./Routes/RoutesMain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
