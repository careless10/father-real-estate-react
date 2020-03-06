import React from "react";
import Layout from "../Layout";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.user ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.defaultProps = {
  auth: {
    user: null
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(PrivateRoute);
