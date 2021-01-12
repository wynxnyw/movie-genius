import Axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export function fetch(route: string) {
    return Axios({
        method: "GET",
        url: `${API_URL}${route}`,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.data)
        .catch(err => console.log(err));
}

export function post(route: string, data: any) {
    return Axios({
        method: "POST",
        url: `${API_URL}${route}`,
        headers: {
            "Content-Type": "application/json"
        },
        data
    })
}