import {CreateMovie, Home, Movies} from "../../pages";

export const routes = [
    {
        path: '/movies/create',
        label: 'Create Movie',
        component: CreateMovie
    },
    {
        path: '/movies',
        label: 'Movies',
        component: Movies
    },
    {
        path: '/',
        label: 'Home',
        component: Home
    }
]