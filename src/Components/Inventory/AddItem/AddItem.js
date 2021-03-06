import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
    // formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.name.value = "";
    e.target.description.value = "";
    e.target.price.value = "";
    e.target.quantity.value = "";
    e.target.img.value = "";
    console.log(data);
    const url = `https://pacific-stream-39269.herokuapp.com/fruit`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, email }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddItem;
