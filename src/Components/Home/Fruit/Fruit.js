import React from "react";
import { useNavigate } from "react-router-dom";
import "./Fruit.css";

const Fruit = ({ fruit }) => {
  const { _id, name, img, description, price, quantity, supplierName } = fruit;
  const navigate = useNavigate();

  const navigateToServiceDetail = (_id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div className="fruit-cart">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <h2>$:{price}</h2>
      <p>{description}</p>
      <h5>Quantity:{quantity}</h5>
      <h5>Supplier-Name:{supplierName}</h5>
      <button onClick={() => navigateToServiceDetail(_id)} className="btn-cart">
        Update
      </button>
    </div>
  );
};

export default Fruit;
