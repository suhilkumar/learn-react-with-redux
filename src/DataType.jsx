import React from "react";
const DataType = (props) => {
  let message = `bye there`;
  if (Math.random() > 0.5) {
    message = "Hi there";
  }
  let num = 2;
  let double = 2.3;
  //   let boolean = false;
  let arr = [2, 3, 4, 5];
  let obj = {};
  return (
    <>
      <h3>{message}</h3>
      {/* you can write expressions in curly brackets as well */}
      <h1>{new Date().toLocaleTimeString()}</h1>
      <p>{num}</p>
      {/* <p>{boolean}</p> */}
      <p>{arr}</p>
      <p>{double}</p>
      {/* not valid */}
      {/* <p>{obj}</p> */}
      <p>you can use multiple operators as well</p>
      <p>{2 + message}</p>
      <p>{36 % 3}</p>
    </>
  );
};

export default DataType;
