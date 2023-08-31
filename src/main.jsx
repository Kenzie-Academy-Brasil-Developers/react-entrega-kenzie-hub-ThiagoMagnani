import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Components/providers/ProductContext";
import { RoutesMain } from "./Components/Routes/RoutesMain.jsx";
import { TechProvider } from "./Components/providers/TechnologieContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
