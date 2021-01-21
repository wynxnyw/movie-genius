import gql from 'graphql-tag'

export const typeDefs = gql`
    type Movie {
        id: ID!
        title: String!
        plotSummary: String
        plotDescription: String
    }
    type Query {
        getMovies: [Movie]
    }
    input MovieInput {
        title: String!
        plotSummary: String
        plotDescription: String
    }
    type Mutation {
        enterMovie(movieInput: MovieInput): [Movie]
    }
`