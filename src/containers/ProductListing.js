import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
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
      <h2>This is Product Listing!</h2>
    </div>
  );
};

export default ProductListing;
