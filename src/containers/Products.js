import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    return (
      <div key={product.id} className="ms-3 mt-5">
        <ul>
          <li>{product.name}</li>
        </ul>
        <Link to={`/product/${product.id}`}>
          <button className="btn btn-dark ms-3">Details</button>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Products;
