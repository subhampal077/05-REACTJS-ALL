// create and render element in js //

const root = document.querySelector("#root");

// create element using core js
const h3 = document.createElement("h3");
h3.className = "hello-h3";
h3.innerText = "H3 element created by core js";
root.append(h3);

//

// create and render element in React
const myPara = React.createElement(
  "p",
  { className: "my-para" },
  "My Para created by React"
);
// const reactRoot = ReactDOM.createRoot(document.querySelector("#react-root"));
// reactRoot.render(myPara);

//

// creating a container using react
const container = React.createElement(
  "div",
  { className: "container", id: "container", key: 1 },
  [
    React.createElement(
      "p",
      { className: "para-1", key: 1 },
      "Para created by react"
    ),

    React.createElement("div", { className: "sub-div", key: 3 }, [
      React.createElement(
        "h1",
        { className: "div-h1", key: 3 },
        "h1 inside div"
      ),
      React.createElement(
        "h2",
        { className: "div-h2", key: 4 },
        "h2 inside div"
      ),
      React.createElement("img", {
        className: "image-tag",
        style: { width: "300px", backgroundColor: "red", padding: "16px" },
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
        key: 5,
      }),
      React.createElement("form", { className: "form", key: 6 }, [
        React.createElement("div", { className: "input-div", key: 6 }, [
          React.createElement(
            "label",
            { htmlFor: "input-1", key: 6 },
            "UserName:"
          ),
          React.createElement("input", { id: "input-1", key: 7 }),
        ]),
      ]),
    ]),
  ]
);

const reactRoot = ReactDOM.createRoot(document.querySelector("#react-root"));

reactRoot.render(container);
