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
    query getSingleExercise($exerciseId: ID!) {
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

