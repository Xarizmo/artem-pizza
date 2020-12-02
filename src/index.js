import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PizzaProvider } from "./PizzaContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
