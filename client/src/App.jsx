//import { useState } from 'react'
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminProfile from "./pages/AdminProfile";
import CreateExercise from "./pages/CreateExercise";
import CreatePatient from "./pages/CreatePatient";
import Exercise from "./pages/Exercise";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";

//Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
  //uri: '/graphql',
  //credentials: 'include'
});

//Construct request middleware that will attach the JWT token to an authorization header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//Create our apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  //link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/AdminProfile" element={<AdminProfile />} />
            <Route path="/CreateExercise" element={<CreateExercise />} />
            <Route path="/CreatePatient" element={<CreatePatient />} />
            <Route path="/Exercise" element={<Exercise />} />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Me" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
