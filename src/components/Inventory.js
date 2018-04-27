import React, { Component } from "react";
import PropTypes from "prop-types";
import AddDish from "./AddDish";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddDish addDish={this.props.addDish} />
        <button onClick={this.props.loadSampleFood}>Load Menu</button>
      </div>
    );
  }
}

export default Inventory;
