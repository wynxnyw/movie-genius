import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {Movie} from './src/models/movie'
import bodyParser from 'body-parser';

require('dotenv').config()

const app = express();
const PORT = process.env.API_PORT;
const dbUri = process.env.DB_URI;

mongoose.connect(dbUri || '', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)))
    .catch(err => console.log(err));

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.post('/movies/create', (req, res) => {
    const movie = new Movie(req.body);
    movie.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))
});

app.get('/movies', (req, res) => {
    Movie.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
})

app.use((req, res) => {
   res.send('404 - Route Not Found');
});

