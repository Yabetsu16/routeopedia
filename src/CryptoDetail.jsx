import React from "react";
import { useParams } from "react-router-dom";

const CryptoDetail = () => {
  const { cryptoSymbol,id } = useParams();
  return <div>CryptoDetail
    <p>Symbol: {cryptoSymbol}</p>
    <p>ID: {id}</p>
  </div>;
};

export default CryptoDetail;
