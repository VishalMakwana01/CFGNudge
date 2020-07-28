// PrivateRoute
//
// Wrapper Component for Route Component to only allow 
// authorised students to access a particular route
// 

import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';

const StudentRoute = ({component: Component, auth, ...rest}) => (
        <Route {...rest}
        render = {props =>
        (auth.isAuthenticated === true && auth.role === "student") ? (
            <Component {...props}/>
        ) :
        <Redirect to="/login"/>
        }/>
    )

StudentRoute.propTypes = {
    auth: PropType.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps,null)(StudentRoute);