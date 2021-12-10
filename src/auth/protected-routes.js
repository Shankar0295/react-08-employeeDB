import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading/Loading';

const ProtectedRoute = ({ component, ...args }) => {
    return (

        <Route component={withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />
        })}
            {...args}
        >

        </Route>
    )
}

export default ProtectedRoute;
