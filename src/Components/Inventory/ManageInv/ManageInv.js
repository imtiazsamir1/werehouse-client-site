import React from "react";
import "./ManageInv.css";

const ManageInv = ({ itemManage }) => {
  const { _id, name, img, description, price, quantity, supplierName } =
    itemManage;
  console.log(itemManage);

  return (
    <div>
      <h2>{name}</h2>
      <img className="manage-img" src={img} alt="" />
      <h3>Quantyty:{quantity}</h3>
      <div>
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ManageInv;
