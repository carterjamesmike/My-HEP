import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                firstName
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_EXERCISE = gql`
    mutation addExercise($name: String!, $description: String!, $totalDays: Int!, $url: String!, $notes: String) {
        addExercise(name: $name, description: $description, totalDays: $totalDays, url: $url, notes: $notes) {
            _id
            name
            description
            totalDays
            url
            notes
            user {
                _id
                username
            }
        }
    }
`;
