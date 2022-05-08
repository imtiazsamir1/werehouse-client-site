import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Manage.css";

const Manage = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruit")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting user with id, ", id);
      const url = `http://localhost:5000/fruit/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = fruits.filter((fruit) => fruit._id !== id);
            setFruits(remaining);
          }
        });
    }
  };
  return (
    <div>
      <Link to={"/addItem"}>
        <div>
          <button className="add-btn">Add New Item</button>
        </div>
      </Link>
      <h2>Available Fruits: {fruits.length}</h2>

      {fruits.map((fruit) => (
        <div className="manage-cart" key={fruit._id}>
          <h3 className="manage-name"> {fruit.name}</h3>
          <img className="manage-img" src={fruit.img} alt="" />

          <h4>Quantity:{fruit.quantity}</h4>

          <button
            className="delete-btn"
            onClick={() => handleUserDelete(fruit._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Manage;
