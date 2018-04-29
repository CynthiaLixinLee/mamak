import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class EditDish extends React.Component {
  static propTypes = {
    dish: PropTypes.shape({
      // image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    index: PropTypes.string,
    updateDish: PropTypes.func
  };

  handleChange = event => {
    // Take a copy of current dish
    const updatedDish = {
      ...this.props.dish,
      // Using 'name' so we know which part got updated
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateDish(this.props.index, updatedDish);
  };
  render() {
    return (
      <div className="dish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.dish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={formatPrice(this.props.dish.price)}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.dish.status}
        >
          <option value="available">Available!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.dish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.dish.image}
        />
        <button onClick={() => this.props.deleteDish(this.props.index)}>
          Remove Dish
        </button>
      </div>
    );
  }
}

export default EditDish;
