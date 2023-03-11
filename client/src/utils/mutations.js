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
    mutation addUser($username: String!, $password: String!, $firstName: String!, $lastName: String!) {
        addUser(username: $username, password: $password, firstName: $firstName, lastName: $lastName) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_EXERCISE = gql`
    mutation AddExercise($userId: ID!, $exercise: ID!) {
        addExercise(userId: $userId, exercise: $exercise) {
            _id
            exercises {
                _id
            }
        }
    }
`;

export const SAVE_EXERCISE = gql`
    mutation saveExercise($name: String!, $description: String!, $totalDays: Int!, $url: String!, $notes: String) {
        saveExercise(name: $name, description: $description, totalDays: $totalDays, url: $url, notes: $notes) {
            _id
            name
        }
    }
`;