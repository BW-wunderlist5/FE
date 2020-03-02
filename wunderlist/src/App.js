import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import TempLogin from "./components/TempLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TempLogin} />
        <PrivateRoute />
      </div>
    </Router>
  );
}

export default App;
