import React, { useState, useEffect } from "react";
import ProductCart from "../components/ProductCart";

const Products = ({ list }) => {
  const [apiData, setApiData] = useState([]);
  console.log(list, "list");

  async function apiCall() {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    setApiData(data.products);
  }
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div>
      <div
        style={{
          marginTop: "4%",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gep: "20px"
        }}
      >
        {apiData &&
          apiData.map((product) => (
            <ProductCart
              item={product}
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
              id={product.id}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
