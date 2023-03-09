const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    password: String
    admin: Boolean
    exercises: [Exercise]
  }

  type Exercise {
    _id: String! 
    name: String
    description: String
    totalDays: Int
    url: String
    notes: String
    users: [User]
  }

  input ExerciseInput { 
    name: String
    description: String
    totalDays: Int
    url: String
    notes: String
    
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, firstName: String, lastName: String, password: String): Auth
    saveExercise(name: String!, description: String totalDays: Int, url: String, notes: String): Exercise
    removeExercise(ExerciseId: String!): User
    addExercise(userId: ID!, exercise: ID!): User
  }

  type Query {
    me: User
    exercises: [Exercise]
    exercise(exerciseId: String!): Exercise
    users: [User]
    user(username: String!): User

}

  type Auth {
    token: ID!
    user: User 
}
`;

module.exports = typeDefs;