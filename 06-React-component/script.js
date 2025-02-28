import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  const { title, price, image, rating } = props; // using destructuring
  return (
    <div className="card">
      <img src={image} alt="product-image" />
      <div className="text-section">
        <h1>{title}</h1>
        <p>
          Price: $ <span>{price}</span>
        </p>
        <p>
          Rating: <span>{rating}</span>
        </p>
      </div>
    </div>
  );
}

// USING React Component //

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container2 = data.products.map((product) => {
      return (
        <Card
          key={product.id}
          image={product.images[0]}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      );
    });

    // console.log(container2);
    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(<div className="container">{container2}</div>);
  });

//

// React component is a function which returns some JSX.

// note : WHEN we create a react element with type function that is called react component.

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//     title: "iphone 14"
//   },
// });

// root.render(React.createElement(Card, { title: "iphone 14" }));

//

// root.render(
//   <Card
//     title="iphone 14"
//     price="699"
//     rating="4.9/5"
//   />
// );
