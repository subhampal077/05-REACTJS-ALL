import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

function displayCard(props) {
  const { key, title, price, image, rating } = props; // using destructuring
  return (
    <div className="card" key={key}>
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

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     const container2 = data.products.map((product) => {
//       return card(
//         product.id,
//         product.title,
//         product.images[0],
//         product.price,
//         product.rating
//       );
//     });

// USING ES6 OBJECT DESTRUCTURING //

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container2 = data.products.map((product) => {
      return displayCard({
        key: product.id,
        image: product.images[0],
        title: product.title,
        price: product.price,
        rating: product.rating,
      });
    });

    const root = ReactDOM.createRoot(document.querySelector("#root"));

    root.render(<div className="container">{container2}</div>);
  });
