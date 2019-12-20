import ApolloClient from 'apollo-boost';

const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
const client = new ApolloClient({
    uri: `${baseUrl}/graphql`,
});

export default client;
