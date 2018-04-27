import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Dish from "./Dish";
import food from "../food";

class App extends Component {
  state = {
    dishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  addDish = dish => {
    // 1. Take a copy of the existing state
    const dishes = { ...this.state.dishes };
    // 2. Add our new dish to that dishes variable
    dishes[`dish${Date.now()}`] = dish;
    // 3. Set the new dishes object to state
    this.setState({ dishes });
  };

  loadSampleFood = () => {
    this.setState({ dishes: food });
  };

  render() {
    return (
      <div className="mamak">
        <div className="menu">
          <Header tagline="It's always time to eat" />
          <ul className="dishes">
            {Object.keys(this.state.dishes).map(key => (
              <Dish key={key} index={key} details={this.state.dishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addDish={this.addDish}
          loadSampleFood={this.loadSampleFood}
        />
      </div>
    );
  }
}

export default App;
