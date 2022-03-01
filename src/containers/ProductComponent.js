import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import Products from "./Products";

const ProductComponent = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2 className="ms-3 mt-4">This is Product Component!</h2>

      <div>
        <Products />
      </div>
    </div>
  );
};

export default ProductComponent;
