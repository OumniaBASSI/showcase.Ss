import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";

// Axios defaults for backend connection
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
