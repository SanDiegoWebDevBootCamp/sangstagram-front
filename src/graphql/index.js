import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // TODO: Use environment variable
    uri: process.env.BACKEND_URL || 'http://localhost:5000/graphql',
});

export default client;
