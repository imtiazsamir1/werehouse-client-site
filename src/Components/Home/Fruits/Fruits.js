import React, { useEffect, useState } from "react";
import Fruit from "../Fruit/Fruit";
import "./Fruits.css";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fruit")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return (
    <div>
      <h2>Our Produts</h2>
      {fruits.map((fruit) => (
        <Fruit key={fruit._id} fruit={fruit}></Fruit>
      ))}
    </div>
  );
};

export default Fruits;
