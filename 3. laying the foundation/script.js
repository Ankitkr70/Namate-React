import React from "react";
import ReactDOM from "react-dom/client";

// *This is JSX. JSX ->reactElement(object) -> HTML element -> DOM -> rendered.
const heading = <h1>This is JSX.</h1>;

const HeadingComponent = () => {
  return <h1>This is a functional componenet</h1>;
};

const NavBar = () => {
  return (
    <nav>
      {heading}
      {"This is a JSX expression"}
      <HeadingComponent></HeadingComponent>
      <ul>
        <li>Home</li>
        <li>Abount Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent());
root.render(<NavBar />); // ? This is a better way to call functional components.
