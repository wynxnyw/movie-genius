import React, {useEffect, useState} from 'react';
import {Movie} from "./Movie";
import {getMovies} from "./api";
import {Link} from 'react-router-dom'

export function Movies() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetchMovies()
    }, [])

    async function fetchMovies() {
        const movies = await getMovies();
        setMovies(movies)
    }

    return (
        <>
            <ul>
                {movies.map(movie => <li>{movie.title}</li>)}
            </ul>
            <Link to='/movies/create'>Enter Movie</Link>
        </>
    )
}