import ProductCard from "../productCard/productCard";
import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  console.log("rerendered");

  useEffect(function () {
    console.log("useEffect");
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div>
      {products.map(function (item) {
        return <ProductCard product={item} key={item.id} />;
      })}
    </div>
  );
}

export default Product;
