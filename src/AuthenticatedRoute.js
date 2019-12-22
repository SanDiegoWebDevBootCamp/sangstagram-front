import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AuthenticatedRoute = (props) => {
    const [cookies] = useCookies(['jwt']);
    const isAuthenticated = cookies.jwt;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />;
};

export default AuthenticatedRoute;
