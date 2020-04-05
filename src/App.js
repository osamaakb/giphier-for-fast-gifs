import React from "react";
import "./App.css";
import Nav from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/(gifs|stickers)" component={Main} />

          <Route exact path="/search/:type/:query" component={Search} />

          <Route path="/" render={() => <Redirect to="/gifs" />} />

          {/* This is like 404 or default. Will match all! */}
          <Route render={() => <div>Hi</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
