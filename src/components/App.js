import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import food from "../food";

class App extends Component {
  render() {
    return (
      <div className="mamak">
        <div className="menu">
          <Header tagline="It's always time to eat" />
        </div>
      </div>
    );
  }
}

export default App;
