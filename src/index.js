import React from "react";
import ReactDom from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import DataType from "./DataType";
import Forms from "./Forms";
const element = document.getElementById("root");

const root = ReactDom.createRoot(element);

const App = (props) => {
  return (
    <>
      <Forms />
      <DataType />
    </>
  );
};
root.render(<App />);
