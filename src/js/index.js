import React from "react";
import ReactDom from "react-dom";

import "../styles/index.scss";

import Traffic from "./component/Traffic.js";

ReactDom.render(<Traffic />, document.querySelector("#app"));
