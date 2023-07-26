import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { LoginPage } from "./page/LoginPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <LoginPage />
    </App>
  </React.StrictMode>
);
