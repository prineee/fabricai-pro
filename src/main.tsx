import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import { PlanProvider } from "./context/PlanContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlanProvider>
          <App />
        </PlanProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);