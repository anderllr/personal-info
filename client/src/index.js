import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './main/App';

const BASE_URL = 'http://localhost:4000/graphql';

const httpLink = new HttpLink({
    uri: BASE_URL
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
