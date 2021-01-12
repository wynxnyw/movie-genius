import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import movieRoutes from './src/routes/movies'

dotenv.config()

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

app.use(movieRoutes);

app.use((req, res) => {
   res.send('404 - Route Not Found');
});

