import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import ManageInv from "../ManageInv/ManageInv";

const ManageItem = () => {
  const [manageItem, setManageItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/manageInv")
      .then((res) => res.json())
      .then((data) => setManageItem(data));
  }, []);
  console.log(setManageItem);
  return (
    <div>
      {manageItem.map((manageInv) => (
        <ManageInv key={manageInv._id} manageInv={manageInv}></ManageInv>
      ))}
    </div>
  );
};

export default ManageItem;
