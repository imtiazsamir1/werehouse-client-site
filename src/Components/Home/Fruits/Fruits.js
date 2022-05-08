import React, { useEffect, useState } from "react";
import Fruit from "../Fruit/Fruit";
import "./Fruits.css";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("https://pacific-stream-39269.herokuapp.com/fruit")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return (
    <div>
      <h2 className="fruit-heading">Our Produts</h2>
      <div className="product-name">
        <p className="products">Apple</p>
        <p className="products">Orange</p>
        <p className="products">Watermelon</p>
        <p className="products">Pineapple</p>
        <p className="products">Mango</p>
        <p className="products">Banana</p>
      </div>
      <div className="cart">
        {fruits.slice(0, 6).map((fruit) => (
          <Fruit key={fruit._id} fruit={fruit}></Fruit>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
