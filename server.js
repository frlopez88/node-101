const express = require('express');
const app = express();

// MiddleWare

app.use(express.json());

let animals = [
    {
        name: "Perro",
        sonido: "Wouf"
    },
    {
        name: "Gato",
        sonido: "Miau"
    }

];

let personas = [
    {
        nombre: "Cristiano",
        profesion: "Jugador"
    },
    {
        nombre: "Scarleth",
        pofresion: "Actriz"
    }
]

// Seleccionar informacion o darle informacion al cliente
app.get('/animal', (req, res) => {

    return res.json(animals);

});


// creacion de animales 
app.post('/animal', (req, res) => {

    const { name, sonido } = req.body;

    const objTemp = {
        name: name,
        sonido: sonido
    }

    animals.push(objTemp);

    return res.json({ mensaje: "Insercion Exitosa" })
})

//put actualizar objetos 

app.put('/animal/:name', (req, res) => {

    const { name } = req.params;

    const { sonido } = req.body;

    for (let i = 0; i < animals.length; i++) {

        if (animals[i].name === name) {
            animals[i].sonido = sonido
        }

    }

    return res.json({ mensaje: "Actualizacion Exitosa" })
})

// borrar registros 

app.delete('/animal/:name', (req, res) => {

    const { name } = req.params;

    animals = animals.filter(item => item.name !== name);
    return res.json({ menseje: "Borrado Exitoso" });

});


// Seleccionar Personas 

app.get('/personas', (req, res) => {
    return res.json(personas)
});

// creacion de personas 

app.post('/personas', (req, res) => {
    const { info1, info2 } = req.body;
    const personaTemp = {
        nombre: info1,
        profesion: info2
    };
    personas.push(personaTemp);
    return res.json({ mensaje: "Insercion Exitosa" });
});

// Actualizacion de Persona

app.put('/personas/:id', (req, res)=>{

    const {id} = req.params;
    const {profesion} = req.body;

    for (let i =0; i < personas.length; i++){
        if (personas[i].nombre === id){
            personas[i].profesion = profesion;
        }
    }

    return res.json({mensaje : "Actualizacion Exitosa"});
 
});


app.delete('/personas/:id', (req, res) => {

    const { id } = req.params;

    personas = personas.filter(item => item.nombre !== id);
    return res.json({ menseje: "Borrado Exitoso" });

});


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
});