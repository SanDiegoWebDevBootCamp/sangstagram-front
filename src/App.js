import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import client from './graphql';
import Navigation from './Navigation';
import UrlRouter from './UrlRouter';

function App() {
    return (
        <ApolloProvider client={client}>
            <CssBaseline />
            <Container maxWidth="md">
                <UrlRouter />
            </Container>
        </ApolloProvider>
    );
}

export default App;
