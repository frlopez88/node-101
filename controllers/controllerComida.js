import { db } from "../db/conexion.js";

const postComida = async (req, res) => {

    const { nombre_comida } = req.body;

    const data = [nombre_comida]

    const sql = ` insert into tbl_comida 
                 ( nombre_comida )
                 values 
                 ($1) returning  *`;

    const result = await db.query(sql, data)

    return res.json({ mensaje: "Insercion Exitosa", obj_creado: result })
}

export {
    postComida
}