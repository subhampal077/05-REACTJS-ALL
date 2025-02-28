// creating a container using JSX

const greet = "Hi!";
const container = /*#__PURE__*/React.createElement("div", {
  className: "jsx-div"
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: "16px",
    color: "red"
  }
}, greet, ", This is a div created using JSX"));
console.log(container);
const reactRoot = ReactDOM.createRoot(document.querySelector("#react-root"));
reactRoot.render(container);
//# sourceMappingURL=script.js.map