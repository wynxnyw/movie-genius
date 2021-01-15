import {post, fetch} from '../../app/axios';
import {Movie} from "./Movie";

export function createMovie(data: Movie) {
    return post('movies/create', data)
}

export function getMovies() {
    return fetch('movies');
}