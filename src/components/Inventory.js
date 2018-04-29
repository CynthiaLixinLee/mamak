import React from "react";
import PropTypes from "prop-types";
import AddDish from "./AddDish";
import EditDish from "./EditDish";

class Inventory extends React.Component {
  static propTypes = {
    Dishes: PropTypes.object,
    updateDish: PropTypes.func,
    deleteDish: PropTypes.func
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.dishes).map(key => (
          <EditDish
            key={key}
            index={key}
            dish={this.props.dishes[key]}
            updateDish={this.props.updateDish}
            deleteDish={this.props.deleteDish}
          />
        ))}
        <AddDish addDish={this.props.addDish} />
        <button onClick={this.props.loadDefaultMenu}>
          Reload Default Menu
        </button>
      </div>
    );
  }
}

export default Inventory;
