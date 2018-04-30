import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav>
    <h3 className="slogan">
      We use the freshest produce and traditional recipies to create good food
    </h3>
    <div className="login">
      <h2>Inventory Login</h2>
      <p>Sign in to manage your store's inventory.</p>
      <button
        className="github"
        // It is not "this.props" because Login is a stateless functional component
        onClick={() => props.authenticate("Github")}
      >
        Log In With Github
      </button>
      <button
        className="facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Log In With Facebook
      </button>
    </div>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
