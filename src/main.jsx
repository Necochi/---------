import React from "react";
import ReactDOM from "react-dom/client";
import Rout from "./modules/Rout.jsx";


import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Rout />
    </Router>
  </React.StrictMode>
);
