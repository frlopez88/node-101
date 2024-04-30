import { db } from "../db/conexion.js";

const postComidaFavorita = async (req, res) => {

    const { id_animal, id_comida } = req.body;

    const data = [id_animal, id_comida]

    const sql = ` insert into tbl_comida_favorita 
                 ( id_animal, id_comida )
                 values 
                 ($1, $2) returning  *`;

    const result = await db.query(sql, data)

    return res.json({ mensaje: "Insercion Exitosa", obj_creado: result })
}

const getComidaFavorita = async (req, res) => {

    const sql = ` select    a.id, 
                            a.id_animal, 
                            b.nombre as nombre_animal, 
                            a.id_comida, 
                            c.nombre_comida
                        from
                        tbl_comida_favorita a
                        inner join tbl_animal b on a.id_animal = b.id
                        inner join tbl_comida c on a.id_comida = c.id`;

    const result = await db.query(sql)

    return res.json(result)
}

export {
    postComidaFavorita, 
    getComidaFavorita
}