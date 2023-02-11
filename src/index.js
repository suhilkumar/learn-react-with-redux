import React from "react";
import ReactDom from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDom.createRoot(element);

const App = (props) => {
  let message = `bye there`;
  if (Math.random() > 0.5) {
    message = "Hi there";
  }
  return (
    <>
      <h1>{message}</h1>
      {/* you can write expressions in curly brackets as well */}
      <h3>{new Date().toLocaleTimeString()}</h3>
    </>
  );
};
root.render(<App />);
