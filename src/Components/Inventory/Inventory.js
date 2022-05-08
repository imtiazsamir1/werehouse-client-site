import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
  let newQuantity;
  const handleDelivered = async () => {
    const productQuantity = parseInt(fruit.quantity);
    newQuantity = productQuantity - 1;
    fruit.quantity = newQuantity;
    const newData = { quantity: fruit.quantity };
    await axios.put(`http://localhost:5000/inventory/${inventoryId}`, newData);
    axios
      .get(`http://localhost:5000/inventory/${inventoryId}`)
      .then((response) => {
        setFruit(response.data);
        toast("Delivered successfully");
      });
  };

  let reStock;
  const hanldeRestock = async (e) => {
    e.preventDefault();

    reStock = parseInt(e.target.reStock.value);

    const reStockQuantity = parseInt(reStock);
    const totalReStockQuantity = reStockQuantity + parseInt(fruit.quantity);
    const newReStockQuantity = { quantity: totalReStockQuantity };

    if (reStockQuantity <= 0) {
      toast("Please Input valid amount");

      return;
    }

    await axios.put(
      `http://localhost:5000/inventory/${inventoryId}`,
      newReStockQuantity
    );
    axios
      .get(`http://localhost:5000/inventory/${inventoryId}`)
      .then((response) => {
        setFruit(response.data);
        toast("Item Restock Successfully");
      });
  };

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
          <button onClick={handleDelivered} className="btn-cart">
            Delivered
          </button>
        </div>
      </div>
      <div>
        <form onSubmit={hanldeRestock}>
          <input name="reStock" type="number" />
          <button className="btn-cart">Submit</button>
        </form>
        <div>
          <Link to={"/manage"}>
            <button className="btn-cart">Manage Inventories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
