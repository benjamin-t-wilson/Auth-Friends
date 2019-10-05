import React from "react";
import { axiosWithAuth } from "./axiosWithAuth.js";

const Friend = props => {
  const { name, age, email, id } = props.data;

  const handleDelete = () => {
    props.setUpdate(true);
    axiosWithAuth()
      .delete("/friends/" + id)
      .then(res => {
        props.setList(res.data);
        props.setUpdate(false);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  return (
    <div className="friend">
      <h1>{name}</h1>
      <p>Age: {age}yrs old</p>
      <p>Email: {email}</p>
      <button onClick={handleDelete}>Delete Friend</button>
    </div>
  );
};

export default Friend;
