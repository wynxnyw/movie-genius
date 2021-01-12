import React, {useEffect, useState} from 'react';
import {Movie} from "./Movies";
import {fetch} from "../../app/axios";
import { Button, Modal } from '@material-ui/core';
import {CreateMovie} from "./create";

export function Movies() {
    const [movies, setMovies] = useState<Array<Movie>>();
    const [showForm, setShowForm] = useState<boolean>(true);

    useEffect(() => {
        fetchMovies();
    }, [])

    async function fetchMovies() {
        const movies: any = await fetch('movies')
        setMovies(movies)
    }

    if(showForm) {
        return (
            <div>
                <Button color='primary' onClick={() => setShowForm(false)}>New Entry</Button>
                <ul>
                    {movies?.map(x => <li>{x.title}</li>)}
                </ul>
            </div>
        )
    }
    return <CreateMovie />
}