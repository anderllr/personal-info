import React from 'react';
import { Query } from 'react-apollo';
import { AUTH_USER } from '../resources/queries/userQuery';

export const isAuthenticated = () => (
    <Query query={AUTH_USER}>
        {({ loading, error, data }) => {
            console.log('Data: ', data);
            if (error) return false;
            if (!loading && data.authUser) return true;

            return false;
        }}
    </Query>
);
