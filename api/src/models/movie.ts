import {Schema, model} from 'mongoose';

const movieSchema = new Schema({
    title: String,
    plotSummary: String,
    plotDescription: String

}, { timestamps: true } );

export const Movie = model('Movie', movieSchema);