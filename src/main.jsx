import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyle } from "./stylesheets/Globalstyle.js";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { global } from "./stylesheets/GlobalColors.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={global}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/admin-dashboard">
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
