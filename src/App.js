import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql';
import Posts from './Posts';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <ApolloProvider client={client}>
            <Posts />
        </ApolloProvider>
    );
}

export default App;
