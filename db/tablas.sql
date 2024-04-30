-- Active: 1698945600332@@127.0.0.1@5432@postgres@public

create table tbl_animal (
    id serial PRIMARY KEY, nombre varchar(250), sonido varchar(20)
);

drop table tbl_comida;

create table tbl_comida (
    id serial PRIMARY key, nombre_comida varchar(200)
);

create table tbl_comida_favorita (
    id SERIAL PRIMARY KEY, id_animal INTEGER REFERENCES tbl_animal (id), id_comida INTEGER REFERENCES tbl_comida (id)
);

select  a.id, 
        a.id_animal, 
        b.nombre as nombre_animal, 
        a.id_comida, 
        c.nombre_comida
from
    tbl_comida_favorita a
    inner join tbl_animal b on a.id_animal = b.id
    inner join tbl_comida c on a.id_comida = c.id