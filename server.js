//const express = require('express');
import express from 'express';
const app = express();
import { animal } from './routes/routeAnimal.js';
import { comida } from './routes/routeComida.js';
import { comidaFavorita } from './routes/routeComidaFavorita.js';

// MiddleWare

app.use(express.json());

app.use('/animal', animal)
app.use('/comida', comida)
app.use('/comidaFavorita', comidaFavorita)


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
});