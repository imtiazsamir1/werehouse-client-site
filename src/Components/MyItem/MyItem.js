import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  console.log(user);
  const email = user?.email;

  useEffect(() => {
    const getItem = async () => {
      const url = `http://localhost:5000/items?email=${email}`;
      await axios.get(url).then((response) => setItem(response.data));

      // setItem(data);
    };
    getItem();
  }, [user]);
  return (
    <div>
      <h3>My Item:{item.length}</h3>
    </div>
  );
};

export default MyItem;
