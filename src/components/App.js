import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Dish from "./Dish";
import food from "../food";
import base from "../base";

class App extends Component {
  state = {
    dishes: { ...food }, // An object with the list of dishes
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    this.ref = base.syncState("dishes", {
      context: this,
      state: "dishes"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addDish = dish => {
    // 1. Take a copy of the existing state
    const dishes = { ...this.state.dishes };
    // 2. Add our new dish to that dishes variable
    dishes[`dish${Date.now()}`] = dish;
    // 3. Set the new dishes object to state
    this.setState({ dishes });
  };

  updateDish = (key, updatedDish) => {
    // Take a copy of current state
    const dishes = { ...this.state.dishes };
    // Update that state
    dishes[key] = updatedDish;
    // Set that to state
    this.setState({ dishes });
  };

  deleteDish = key => {
    // Take a copy of current state
    const dishes = { ...this.state.dishes };
    // Update the state
    dishes[key] = null;
    this.setState({ dishes });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  removeFromOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  loadDefaultMenu = () => {
    this.setState({ dishes: food });
  };

  render() {
    return (
      <div className="mamak">
        <div className="menu">
          <Header tagline="It's always time to eat" />
          <ul className="dishes">
            {Object.keys(this.state.dishes).map(key => (
              <Dish
                key={key}
                index={key}
                details={this.state.dishes[key]} // Pass all the info to Dish.js
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          dishes={this.state.dishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addDish={this.addDish}
          updateDish={this.updateDish}
          deleteDish={this.deleteDish}
          dishes={this.state.dishes}
          loadDefaultMenu={this.loadDefaultMenu}
        />
      </div>
    );
  }
}

export default App;
