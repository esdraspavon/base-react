import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./styles/GlobalStyles.css";

import Context from "./Context";
ReactDOM.render(
  <Context.Provider>
  <App />
  </Context.Provider>,
  document.getElementById("app")
);
