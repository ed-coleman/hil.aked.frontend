import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";
import { AuthProviderWrapper } from "./Contexts/SessionContext";

createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

createGlobalStyle`
  root {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProviderWrapper>
      <App />
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
