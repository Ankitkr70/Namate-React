import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {},
  "Element is created is created using React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
