import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
query getExercises {
        exercises {
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

export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            username
            firstName
            lastName
            exercises {
                _id
                name
                description
                totalDays
                url
                notes
            }
        }
    }
`;


export const QUERY_USER = gql`
    query getUser($username: String!) {
        user(username: $username) {
            _id
            username
            exercises {
                _id
                name
                description
                totalDays
                url
                notes
            }
        }
    }
`;

export const QUERY_SINGLE_EXERCISE = gql`
    query getSingleExercise($exerciseId: String) {
        exercise(exerciseId: $exerciseId) {
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

export const QUERY_SINGLE_USER = gql`
    query getSingleUser($userId: String) {
        user(userId: $userId) {
            _id
            username
            exercises {
                _id
                name
                description
                totalDays
                url
                notes
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            firstName
            lastName
            exercises {
                _id
                name
                description
                totalDays
                url
                notes
            }
        }
    }
`;

            