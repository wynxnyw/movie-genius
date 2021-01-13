import {Home, Movies} from "../../pages";

export const routes = [
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