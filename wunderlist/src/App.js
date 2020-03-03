import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import TempLogin from "./components/TempLogin";
import TodoPage from "./components/TodoPage";

import "./App.css";
import "./components/TodoList.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TempLogin} />
        <PrivateRoute exact path="/todos" component={TodoPage} />
      </div>
    </Router>
  );
}

export default App;
