// PrivateRoute
//
// Wrapper Component for Route Component to only allow
// authorised students to access a particular route
//

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropType from "prop-types";

const TeacherRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true && auth.role === "teacher" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

TeacherRoute.propTypes = {
  auth: PropType.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(TeacherRoute);
