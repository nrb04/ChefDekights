import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthPovider from "./providers/AuthPovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPovider>
      <RouterProvider router={router} />
    </AuthPovider>
  </React.StrictMode>,
);
