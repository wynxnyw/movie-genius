import {Movie} from "../../../../models/movie";

export async function getMovies() {
    try {
        return Movie.find();
    } catch {
        throw new Error();
    }
}