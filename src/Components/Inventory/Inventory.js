import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";
const Inventory = () => {
  const { inventoryId } = useParams();

  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/fruit/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, []);
  return (
    <div>
      <div className="update-cart">
        <img className="update-cart-img" src={fruit.img} alt="" />
        <h1>{fruit.name}</h1>
        <h3>{fruit.price}</h3>
        <p>{fruit.description}</p>
        <h4>Quantity:{fruit.quantity}</h4>
        <h5>{fruit.supplierName}</h5>
        <div>
          <button className="btn-cart">Delivered</button>
        </div>
      </div>
      <div>
        <input type="text" />
        <button className="btn-cart">Submit</button>
        <div>
          <Link to={"/manageInv"}>
            <button className="btn-cart">Manage Inventories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
