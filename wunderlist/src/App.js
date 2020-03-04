import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import styled from "styled-components";

import TodoPage from "./components/TodoPage";
import Login from "./components/login";
import Registration from "./components/registration";

import "./App.css";
import "./components/TodoList.css";
import "./components/SearchBar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        {/* private route should be something like /todos/:id */}
        <PrivateRoute exact path="/todos" component={TodoPage} />
      </div>
    </Router>
  );
}

export default App;
