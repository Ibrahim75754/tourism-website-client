import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { loading, user } = UseAuth();
    if (loading) {
        return <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;