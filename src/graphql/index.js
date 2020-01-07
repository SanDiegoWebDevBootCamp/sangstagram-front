import ApolloClient from 'apollo-boost';

const backendBaseUrl = process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000'

const client = new ApolloClient({
    // TODO: Use environment variable
    uri: `${backendBaseUrl}/graphql`,
    request: (operation) => {
        const { jwt } = operation.getContext();
        operation.setContext(
            {
                headers: {
                    Authorization: jwt ? `Bearer ${jwt}` : '',
                },
            },
        );
    },
});

export default client;
