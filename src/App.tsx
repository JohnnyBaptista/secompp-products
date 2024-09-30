import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Products from "./Products";

const products = [
  {
    title: "Product 1",
    description: "Description 1",
    id: 1,
    price: 100,
    quantity: 10,
  },
  {
    title: "Product 2",
    description: "Description 2",
    id: 2,
    price: 200,
    quantity: 20,
  },
  {
    title: "Product 3",
    description: "Description 3",
    id: 3,
    price: 300,
    quantity: 30,
  },
];

const App = () => (
  <div style={{ width: "100%" }}>
    <h2>Produtos</h2>
    <Products products={products} />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
