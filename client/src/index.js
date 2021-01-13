import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { OrderProvider } from "./OrderContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
