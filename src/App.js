import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import client from './graphql';
import Navigation from './Navigation';

// this is a temporary user
// will eventually get it from backend after authentication
const currentUser = {
    username: 'jin_park',
};

// this is also a temporary function
// pretending to save a new comment in the backend
const saveNewComment = (comment) => console.log(comment);

function App() {

    const onNewComment = (payload) => {
        const comment = {
            ...payload,
            user: currentUser,
        };

        saveNewComment(comment);
    };

    return (
        <ApolloProvider client={client}>
            <CssBaseline />
            <Container maxWidth="md">
                <Navigation onNewComment={onNewComment}/>
            </Container>
        </ApolloProvider>
    );
}

export default App;
