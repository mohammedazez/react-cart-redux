import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Bungkus App js dengan Provider
import { Provider } from "react-redux";
// Import Store
import store from "./Redux/Store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
