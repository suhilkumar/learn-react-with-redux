import React from "react";
import ReactDom from "react-dom/client";
import App from "./FirstProject";
const element = document.getElementById("root");

const root = ReactDom.createRoot(element);

root.render(<App />);
