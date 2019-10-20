import React from "react";
import "./App.scss";

//importing router stuff as shown in their documentation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//my component imports
import PrivateRoute from "./components/PrivateRoute.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    //everything must be wrapped in a router component
    <Router>
      <nav>
        <h1>My Many Friends</h1>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
      <Switch>
        {" "}
        {/*Switch will render the first appropriate component in the list. Start with the most restricted and work down*/}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
