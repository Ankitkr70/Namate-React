// *Creating an elemnet using normal JS

const root = document.getElementById("root");
const heading = document.createElement("h1");
heading.innerText = "Hello React";
// root.appendChild(heading);

// * Creating the same using using React

const heading2 = React.createElement(
  "h1",
  {},
  "Element created using React heading 1"
);
const heading3 = React.createElement(
  "h1",
  {
    title: "Hover me",
    class: "page-heading",
  },
  "Element with attributes"
);

console.log(heading3);

// * render multiple elements using array
const div = React.createElement("div", {
  children: [heading2, heading3],
});

const div2 = React.createElement("div", {}, [heading2, heading3]);

// * Root needed to be created using ReactDOM that will render the react element in DOM

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(div);
