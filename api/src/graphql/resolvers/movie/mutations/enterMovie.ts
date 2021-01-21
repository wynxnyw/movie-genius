import {Movie} from "../../../../models/movie";


export async function enterMovie(_: any, {movieInput}: {movieInput: any}, context: any, info: any) {
    const movie = new Movie(movieInput)
    const result = await movie.save();
    return;
}




