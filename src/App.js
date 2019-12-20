import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import client from './graphql';
import Navigation from './Navigation';
import login from './auth'

function App() {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState({});

    const onLogin = () => {
        login().then(console.log);
    };

    return (
        <ApolloProvider client={client}>
            <CssBaseline />
            <Container maxWidth="md">
                <Navigation onLogin={onLogin}/>
            </Container>
        </ApolloProvider>
    );
}

export default App;
