import {Schema, model} from 'mongoose';

const movieSchema = new Schema({
    title: String,
    summary: String,
    description: String

}, { timestamps: true } );

export const Movie = model('Movie', movieSchema);