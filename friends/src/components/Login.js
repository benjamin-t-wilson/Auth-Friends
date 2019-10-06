import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth.js";

const Login = props => {
  //declare an empty obj for easiness
  const loginObj = {
    username: "",
    password: ""
  };

  //declare states and constants
  const [loginValue, setLoginValue] = useState(loginObj);
  const [loginStatus, setLoginStatus] = useState(false);

  //typical handlechange
  const handleChange = e => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    //all submits refresh the page, prevent that
    e.preventDefault();
    //set editing to true for flavor
    setLoginStatus(true);
    axiosWithAuth()
      .post("/login", loginValue)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .then(() => {
        //after setting the token, clear state object and redirect to protected route
        setLoginValue(loginObj);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  return (
    <section className="login">
      {!loginStatus ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="LambdaSchoolRox11235"
            value={loginValue.login}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="supersecure"
            value={loginValue.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>Logging in...</p>
      )}
    </section>
  );
};

export default Login;
