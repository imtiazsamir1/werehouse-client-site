import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Updatee = () => {
  const { id } = useParams();
  const [fruit, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/fruit/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const updatedUser = { name, email };

    const url = `http://localhost:5000/fruit/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        event.target.reset();
      });
  };

  return (
    <div>
      <h2>Updating User: {fruit.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Updatee;
