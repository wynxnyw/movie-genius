import {post} from '../../app/axios';
import {Movie} from "./Movies";

export function createMovie(data: Movie) {
    return post('movies/create', data)
}