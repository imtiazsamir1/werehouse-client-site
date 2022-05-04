import axios from "axios";
import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";

import ManageInv from "../ManageInv/ManageInv";
import "./ManageItem.css";
const ManageItem = () => {
  const [manageItem, setManageItem] = useState([]);

  const getItem = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/manageInv`);
      if (data) {
        setManageItem(data);
      }
    } catch (error) {
      console.log(error.massage);
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  // console.log(manageItem);
  return (
    <div>
      <Link to={"/addItem"}>
        <div>
          <button className="add-btn">Add New Item</button>
        </div>
      </Link>

      {manageItem.map((item) => (
        <ManageInv key={item._id} itemManage={item}></ManageInv>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default ManageItem;
