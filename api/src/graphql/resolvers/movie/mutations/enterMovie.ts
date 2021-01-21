import {Movie} from "../../../../models/movie";


export async function enterMovie(parent: any, {input}: {input: any}, {user}: {user: any}) {
    return Movie.create(input)
}