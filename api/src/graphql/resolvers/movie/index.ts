import {getMovies} from "./queries/getMovies";
import {enterMovie} from './mutations/enterMovie'

export const movieResolvers = {
    Query: {
        getMovies
    },
    Mutation: {
        enterMovie
    }
}