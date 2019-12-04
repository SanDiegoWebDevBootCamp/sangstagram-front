import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // TODO: Use environment variable
    uri: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/graphql',
});

export default client;
