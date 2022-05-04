import React from "react";
import { useNavigate } from "react-router-dom";
import Fruit from "../../Home/Fruit/Fruit";

const ManageInv = ({ manageInv }) => {
  const { _id, name, img, description, price, quantity, supplierName } =
    manageInv;

  // const navigate = useNavigate();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ManageInv;
