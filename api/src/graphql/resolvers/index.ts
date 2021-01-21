import { movieResolvers} from "./movie/index";
import {userResolvers} from "./user";

export const resolvers = {
    Query: {
        ...movieResolvers.Query,
        ...userResolvers.Query
    },
    Mutation: {
        ...movieResolvers.Mutation,
        ...userResolvers.Mutation
    }
}