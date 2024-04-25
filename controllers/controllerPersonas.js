let personas = [
    {
        nombre: "Cristiano",
        profesion: "Jugador"
    },
    {
        nombre: "Scarleth",
        pofresion: "Actriz"
    }
];

const getPersonas = (req, res) => {
    return res.json(personas)
};


const postPersonas = (req, res) => {
    const { info1, info2 } = req.body;
    const personaTemp = {
        nombre: info1,
        profesion: info2
    };
    personas.push(personaTemp);
    return res.json({ mensaje: "Insercion Exitosa" });
}


const putPersona = (req, res)=>{

    const {id} = req.params;
    const {profesion} = req.body;

    for (let i =0; i < personas.length; i++){
        if (personas[i].nombre === id){
            personas[i].profesion = profesion;
        }
    }

    return res.json({mensaje : "Actualizacion Exitosa"});
 
}

const deletePersona = (req, res) => {

    const { id } = req.params;

    personas = personas.filter(item => item.nombre !== id);
    return res.json({ menseje: "Borrado Exitoso" });

}

export {
    getPersonas, 
    postPersonas, 
    putPersona, 
    deletePersona
}