import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import styled from "styled-components";

import TodoPage from "./components/TodoPage";

import "./App.css";
import "./components/TodoList.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute exact path="/todos" component={TodoPage} />
      </div>
    </Router>
  );
}

export default App;
