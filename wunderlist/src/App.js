import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import TempLogin from "./components/TempLogin";
import TodoPage from "./components/TodoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TempLogin} />
        <Route path="/todos">
          <TodoPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
