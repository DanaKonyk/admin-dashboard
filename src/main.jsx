import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyle } from "./stylesheets/Globalstyle.js";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { global } from "./stylesheets/GlobalColors.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={global}>
      <BrowserRouter basename="/admin-dashboard">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
