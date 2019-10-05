import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";

import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <Router>
      <nav>
        <h1>My Many Friends</h1>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
