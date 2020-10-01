import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Import Mdbreact
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
// Bungkus App js dengan Provider
import { Provider } from "react-redux";
// Import Store
import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
