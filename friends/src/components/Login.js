import React, { useState } from "react";

const Login = () => {
  const loginObj = {
    login: "",
    password: ""
  };
  const [loginValue, setLoginValue] = useState(loginObj);

  const handleChange = e => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  return (
    <section className="login">
      <form>
        <label htmlFor="login">Username:</label>
        <input
          type="text"
          name="login"
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
      </form>
    </section>
  );
};

export default Login;
