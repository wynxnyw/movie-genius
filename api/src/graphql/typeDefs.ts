import gql from 'graphql-tag'

export const typeDefs = gql`
    type Movie {
        id: ID!
        title: String!
        plotSummary: String!
        plotDescription: String!
    }
    type Query {
        getMovies: [Movie]
    }
    type Mutation {
        enterMovie: [Movie]
    }
`