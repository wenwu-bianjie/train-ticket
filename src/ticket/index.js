import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";

import store from "./store";
import "./index.css";
import App from "./App.jsx";

import * as serviceWorker from "../serviceWorker";

ReactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

if ("production" === process.env.NODE_ENV) {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
