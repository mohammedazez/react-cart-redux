import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Mdbreact
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// AntDesign
import "antd/dist/antd.css";
// React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Bungkus App js dengan Provider
import { Provider } from "react-redux";
// Import Store
import store from "./Redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
