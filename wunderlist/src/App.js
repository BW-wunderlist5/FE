import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";

import TodoPage from "./components/TodoPage";

import Registration from "./components/registration";
// import TempLogin from "./components/TempLogin";

import "./App.css";
import "./components/TodoList.css";
import "./components/SearchBar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/users/:id" component={TodoPage} />
        <Route exact path="/tasks" component={TodoPage} />
      </div>
    </Router>
  );
}

export default App;
