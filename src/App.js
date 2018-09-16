import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <nav>
              <ul className="nav nav-pills">
                <li role="presentation">
                  <Link to="/">Home</Link>
                </li>
                <li role="presentation">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
