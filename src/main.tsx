import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { activeBrand, applyBrandTheme } from "./brand";
import "./index.css";

applyBrandTheme(activeBrand);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
