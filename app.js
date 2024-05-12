// const heading = React.createElement("h1", {id:'heading'}, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am H1 tag")
//   )
// );
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)
// craete a sibling

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       [React.createElement("h1", {}, "I am H1 tag"),React.createElement("h2", {}, "I am H2tag")]
//     )
//   );
//   const root=ReactDOM.createRoot(document.getElementById("root"))
//   root.render(parent)
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I am H1 tag"),React.createElement("h2", {}, "I am H2tag")]
      ),React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I am H1 tag"),React.createElement("h2", {}, "I am H2tag")]
      )]
  );
  const root=ReactDOM.createRoot(document.getElementById("root"))
  root.render(parent)