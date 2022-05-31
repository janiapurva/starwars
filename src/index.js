import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import storeConfig from "./state/reducers/character/store/configureStore";
import { Provider } from "react-redux";

const store = storeConfig();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
