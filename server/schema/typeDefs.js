const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    firstName: String
    lastName: String
    password: Sting!
    admin: Boolean
    exercises: [Exercise]
  }

  type Exercise {
    exerciseId: String! 
    name: String
    description: String
    totalDays: Int
    url: String
    notes: String
    user: [User]
  }

  type ExerciseInput {
    name: String
    description: String
    totalDays: Int
    url: String
    notes: String
    user: [User]
  }

  type Mutation {
    login(username: String!, password:String): Auth
    addUser(username: String!, firstName: String, lastName: String, password: String): Auth
    saveExercise(input: ExerciseInput): User
    removeExercise(ExerciseId: String!): User
  }

  type Query {
    me: User
}

  type Auth {
    Token: ID!
    user: User 
}
`;

module.exports = typeDefs;