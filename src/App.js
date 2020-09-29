import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import Components
import Header from "./Components/Header";
import Upcoming from "./Components/Upcoming";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
