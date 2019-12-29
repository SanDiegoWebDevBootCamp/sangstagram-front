import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // TODO: Use environment variable
    uri: `${process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000'}/graphql`,
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
