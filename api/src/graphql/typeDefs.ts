import gql from 'graphql-tag'

export const typeDefs = gql`
    type Movie {
        id: ID!
        title: String!
        plotSummary: String
        plotDescription: String
    }
    type User {
        id: ID!
        email: String!
        username: String!
        token: String!
    }

    input MovieInput {
        title: String!
        plotSummary: String
        plotDescription: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        email: String!
    }
    
    type Mutation {
        enterMovie(movieInput: MovieInput): [Movie]
        registerUser(registerInput: RegisterInput): User!
    }
    type Query {
        getMovies: [Movie]
        getUsers: [User]
    }
    
`