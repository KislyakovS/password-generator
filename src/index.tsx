import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import * as serviceWorkerRegistration from "./service-worker-registration";

import "./global.css";
import "./theme.css";

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

serviceWorkerRegistration.register();
