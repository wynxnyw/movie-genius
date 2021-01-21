import { movieResolvers} from "./movie/index";

export const resolvers = {
    Query: {
        ...movieResolvers.Query
    },
    Mutation: {
        ...movieResolvers.Mutation
    }
}