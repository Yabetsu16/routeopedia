import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div>
      Product
      <button onClick={() => {navigate("/product/create")}}>Add Product</button>
    </div>
  );
};

export default Product;
