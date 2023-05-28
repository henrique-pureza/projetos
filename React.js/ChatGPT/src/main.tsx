import React from "react";
import {Root, createRoot} from "react-dom/client";

import "bootstrap/scss/bootstrap.scss";

import App from "./App.tsx";

const reactDiv = document.getElementById("react");
const reactRoot: Root = createRoot(reactDiv as Element);

reactRoot.render(React.createElement(App));
