import express from 'express';
import {Movie} from "../models/movie";

const router = express.Router();

router.post('/movies/create', (req, res) => {
    const movie = new Movie(req.body);
    movie.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))
});

router.get('/movies', (req, res) => {
    Movie.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
});

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then( result => res.send(result))
        .catch(err => console.log(err))
});

export default router;