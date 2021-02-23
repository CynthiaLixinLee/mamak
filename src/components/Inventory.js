import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddDish from "./AddDish";
import EditDish from "./EditDish";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    Dishes: PropTypes.object,
    updateDish: PropTypes.func,
    deleteDish: PropTypes.func,
  };
  // This state is local to this component
  state = {
    uid: null,
    owner: null,
  };

  // Everytime we load page, firebase will check if we're logged in
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    const storeOwner = await base.fetch("owner", { context: this });
    // Set the state of the inventory component to reflect current user
    this.setState({
      uid: authData.user.uid,
      owner: storeOwner,
    });
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    console.log("Logging out...");
    await firebase.auth().signOut();
    this.setState({ uid: null }); // Reset state
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // Check if user is logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    // Check if they are not the owner
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <h3 className="slogan">
            We use the freshest produce and traditional recipies to create good
            food
          </h3>
          <p>Sorry, you are not the owner of this store!</p>
          {logout}
        </div>
      );
    }
    // They must be the owner - render the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.dishes).map((key) => (
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
        {logout}
      </div>
    );
  }
}

export default Inventory;
