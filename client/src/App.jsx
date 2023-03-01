//import { useState } from 'react'
import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'

//Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//Construct request middleware that will attach the JWT token to an authorization header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: { 
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

//Create our apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
        <div>        
          <Routes>
            <Route 
            path="/" 
            element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider> 
  )
}

export default App
