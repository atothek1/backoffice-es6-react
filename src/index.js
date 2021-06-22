import React from "react";
import { render } from "react-dom";

import { getRoot } from "./utils/dom";
import { App } from "./App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  getRoot()
);
