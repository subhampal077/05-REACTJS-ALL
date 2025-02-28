// creating a container using JSX

const greet = "Hi!";

const container = (
  <div className="jsx-div">
    <h2 style={{ fontSize: "16px", color: "red" }}>
      {greet}, This is a div created using JSX
    </h2>
  </div>
);

console.log(container);

const reactRoot = ReactDOM.createRoot(document.querySelector("#react-root"));
reactRoot.render(container);
