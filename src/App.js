import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import client from './graphql';
import Posts from './Posts';

function App() {
    return (
        <ApolloProvider client={client}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Posts />
            </Container>
        </ApolloProvider>
    );
}

export default App;
