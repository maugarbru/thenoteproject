-- Database: la-nota

-- DROP DATABASE "la-nota";

CREATE DATABASE "la-nota"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.grupos

-- DROP TABLE public.grupos;

CREATE TABLE public.grupos
(
    id character varying(50) NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    genero1 character varying(100) NOT NULL,
    genero2 character varying(100) NOT NULL,
    ciudad character varying(100) NOT NULL,
    precio int NOT NULL,
    foto character varying(200) NOT NULL,
    video character varying(200) NOT NULL
)
