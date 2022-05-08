import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  console.log(user);

  useEffect(() => {
    const getItem = async () => {
      const email = user?.email;
      const url = `https://pacific-stream-39269.herokuapp.com/items?email=${email}`;

      await axios
        .get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => setItem(response.data));

      // setItem(data);
    };
    getItem();
  }, [user]);

  return (
    <div>
      <h3>My Item:{item.length}</h3>
      {item.map((item) => (
        <div className="manage-cart" key={item._id}>
          <h3 className="manage-name"> {item.name}</h3>
          <img className="manage-img" src={item.img} alt="" />
          <p>{item.description}</p>

          <h4>Quantity:{item.quantity}</h4>
        </div>
      ))}
    </div>
  );
};

export default MyItem;
