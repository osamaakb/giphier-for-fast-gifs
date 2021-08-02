import React from "react";
import "./App.css";
import Nav from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
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

          <Route render={() => <div>Hi, you landed on the wrong page, click <Link to='/'>here</Link> to go back to the main page</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
