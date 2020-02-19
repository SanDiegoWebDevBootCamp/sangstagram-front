import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { createUploadLink } from 'apollo-upload-client';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

const BACKEND_BASEURL = process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000';

const httpOptions = { uri: `${BACKEND_BASEURL}/graphql`, credentials: 'include' };
const uploadLink = createUploadLink(httpOptions);
const httpLink = new HttpLink(httpOptions);

const cache = new InMemoryCache({
    dataIdFromObject: (object) => object.id,
});

const stateLink = withClientState({
    cache,
});

const createApolloClient = () => new ApolloClient({
    ssrMode: typeof window !== 'undefined',
    link: ApolloLink.from([stateLink, uploadLink, httpLink]),
    cache,
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

const client = createApolloClient();

// const client = new ApolloClient({
//     // TODO: Use environment variable
//     uri: `${process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000'}/graphql`,
//     request: (operation) => {
//         const { jwt } = operation.getContext();
//         operation.setContext(
//             {
//                 headers: {
//                     Authorization: jwt ? `Bearer ${jwt}` : '',
//                 },
//             },
//         );
//     },
// });

export default client;
