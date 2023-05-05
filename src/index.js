import React from "react";
import ReactDOM from "react-dom";
import { InfoProvider } from "./Components/context";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
