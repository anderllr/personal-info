import React from 'react';
import { Query } from 'react-apollo';

import { Route, Redirect } from 'react-router';

import { Logo, Footer, Nav } from '../components/template';
import { AUTH_USER } from '../components/resources/queries/userQuery';

import './App.css';

export default ({ component: Component, ...rest }) => (
    <Query query={AUTH_USER}>
        {({ loading, error, data }) => {
            console.log('Data: ', data);
            if (error) return <h1>{error.message}</h1>;
            if (loading) return <h1>Loading...</h1>;

            return (
                <Route
                    {...rest}
                    render={props =>
                        data.authUser ? (
                            <div className='app'>
                                <Logo />
                                <Nav />
                                <Component {...props} />
                                <Footer />
                            </div>
                        ) : (
                                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                            )
                    }
                />
            )

            return false;
        }}
    </Query>
);

    /*
    export default ({ component: Component, ...rest }) =>
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <div className='app'>
                    <Logo />
                    <Nav />
                    <Component {...props} />
                    <Footer />
                </div>
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        }
    />
    */