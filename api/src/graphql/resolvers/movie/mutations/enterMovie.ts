import {Movie} from "../../../../models/movie";


export async function enterMovie(_: any, {movieInput}: {movieInput: any}, context: any, info: any) {
    // TODO: validate user data
    // make sure movie doesnt exist
    //
    console.log('ok')
    const movie = new Movie(movieInput)
    const result = await movie.save();
    console.log(result);
    return;
}

