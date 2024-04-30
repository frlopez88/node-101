import express from 'express';
const comidaFavorita = express();
import { postComidaFavorita, getComidaFavorita } from '../controllers/controllerComidaFavorita.js';

comidaFavorita.post('/', postComidaFavorita);
comidaFavorita.get('/', getComidaFavorita);

export {
    comidaFavorita
}