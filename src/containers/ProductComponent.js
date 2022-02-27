import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Products from "./Products";

const ProductComponent = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const res = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Error:", err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchUsers();
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
