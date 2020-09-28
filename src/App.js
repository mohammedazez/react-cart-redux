import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Import Components
import Header from "./Components/Header";
import MovieNowPlaying from "./Components/MovieNowPlaying";
import Upcoming from "./Components/Upcoming";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
            <Header />
          </Route>
          <Route>
            <Home />
          </Route>
          <Route>
            <MovieNowPlaying />
          </Route>
          <Route>
            <Upcoming />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
