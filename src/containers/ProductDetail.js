import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  const { id, name, website, phone } = product;

  console.log(product);
  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${productId}`)
      .catch((err) => {
        console.log("Error:", err);
      });

    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchUserDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      <h1>Product No: {id}!</h1>
      <p>Name: {name}</p>
      <p>{phone}</p>
      <p style={{ cursor: "pointer" }}>
        <u>{website}</u>
      </p>
    </div>
  );
};

export default ProductDetail;
