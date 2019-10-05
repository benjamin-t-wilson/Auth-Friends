import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth.js";

const Login = props => {
  const loginObj = {
    username: "",
    password: ""
  };
  const [loginValue, setLoginValue] = useState(loginObj);
  const [loginStatus, setLoginStatus] = useState(false);

  const handleChange = e => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", loginValue)
      .then(res => {
        setLoginStatus(true);
        localStorage.setItem("token", res.data.payload);
      })
      .then(() => {
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
