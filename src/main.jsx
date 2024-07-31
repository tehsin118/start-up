import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/main.scss";
import "sweetalert2/src/sweetalert2.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
