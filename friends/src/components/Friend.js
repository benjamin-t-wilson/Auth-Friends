import React, { useState } from "react";
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

  const [editing, setEditing] = useState(false);
  const [friendValue, setFriendValue] = useState(props.data);

  const handleChange = e => {
    setFriendValue({ ...friendValue, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    if (editing === true) {
      axiosWithAuth()
        .put(`/friends/${id}`, friendValue)
        .then(res => {
          props.setList(res.data)
          setEditing(false);
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  };

  return (
    <div className="friend">
      <h1>
        {editing ? (
          <input
            type="text"
            name="name"
            value={friendValue.name}
            onChange={handleChange}
          />
        ) : (
          name
        )}
      </h1>
      <p>
        Age:{" "}
        {editing ? (
          <input
            type="text"
            name="age"
            value={friendValue.age}
            onChange={handleChange}
          />
        ) : (
          age + "yrs old"
        )}
      </p>
      <p>
        Email:{" "}
        {editing ? (
          <input
            type="text"
            name="email"
            value={friendValue.email}
            onChange={handleChange}
          />
        ) : (
          email
        )}
      </p>
      <button onClick={handleDelete}>Delete Friend</button>
      <button
        onClick={() => {
          handleEdit();
          setEditing(true);
        }}
      >
        {editing ? "Submit Changes" : "Edit Friend"}
      </button>
    </div>
  );
};

export default Friend;
