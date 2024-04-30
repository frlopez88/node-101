import express from 'express';
const comida = express();
import { postComida } from '../controllers/controllerComida.js';

comida.post('/', postComida);

export {
    comida
}