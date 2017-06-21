-- Database: musica

-- DROP DATABASE musica;

CREATE DATABASE musica3
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    TEMPLATE template0;

\c musica3

CREATE TABLE usuario(
	id_usuario SERIAL PRIMARY KEY,
	nombre_usuario VARCHAR(60) UNIQUE,
	password VARCHAR(60) CHECK (length(password) > 3),
	nombre_apellido VARCHAR(45),
	premium BOOLEAN DEFAULT FALSE
);
    
 CREATE TABLE lista (
    id_lista SERIAL PRIMARY KEY,
    nombre_lista VARCHAR(50),
    likes INT DEFAULT 0 CHECK (likes>=0),
    fk_id_usuario INT NOT NULL REFERENCES usuario (id_usuario)
);
 
 CREATE TABLE artista (
	id_artista SERIAL PRIMARY KEY,
	nombre_artista VARCHAR(50) UNIQUE NOT NULL,
	fecha_nacimiento DATE
);

 CREATE TABLE genero (
    id_genero SERIAL PRIMARY KEY,
   nombre_genero VARCHAR(30) UNIQUE NOT NULL
);

 CREATE TABLE album (
    id_album SERIAL PRIMARY KEY,
    nombre_album VARCHAR(50) NOT NULL,
    year INT,
    imagen VARCHAR(120)
);
   
 CREATE TABLE cancion (
    id_cancion SERIAL PRIMARY KEY,
    nombre_cancion VARCHAR(50),
    duracion INT NOT NULL DEFAULT 0 CHECK (duracion>=0),
    ruta VARCHAR(140) ,
    fk_id_artista INT NOT NULL REFERENCES artista (id_artista),
    fk_id_genero INT NOT NULL REFERENCES genero (id_genero)
);
 
 CREATE TABLE cancion_lista (
    fk_id_cancion INT NOT NULL REFERENCES cancion(id_cancion),
    fk_id_lista INT NOT NULL REFERENCES lista(id_lista),
    indice INT DEFAULT 0 CHECK (indice>=0)
);
 
CREATE TABLE cancion_album (
    fk_id_album INT NOT NULL REFERENCES album (id_album),
    fk_id_cancion INT NOT NULL REFERENCES cancion (id_cancion)
);
 

 


CREATE OR REPLACE FUNCTION f_createLista() returns trigger as $$
DECLARE
	contador integer:=0;
	nrolista integer:=3;
	isPremium boolean;

BEGIN

	IF(TG_OP = 'INSERT') THEN
			SELECT INTO isPremium premium from usuario where id_usuario=NEW.fk_id_usuario;
			IF(isPremium = TRUE) THEN
				RETURN NEW;
			ELSE
				SELECT INTO contador count(*) FROM lista WHERE fk_id_usuario= NEW.fk_id_usuario;
				IF( contador < nrolista) THEN
					RETURN NEW;
				ELSE
					RETURN NULL;

			END IF;
		END IF;	
 	END IF;	
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER inserta_lista4 BEFORE INSERT
ON lista FOR EACH ROW EXECUTE PROCEDURE f_createLista();

CREATE VIEW Todas_listas AS
SELECT *
FROM lista;

CREATE SEQUENCE cancion_lista_seq;
ALTER TABLE cancion_lista ADD COLUMN seq integer unique default nextval('cancion_lista_seq');


CREATE OR REPLACE VIEW Todas_listas AS
SELECT id_lista,nombre_lista,likes,nombre_usuario
FROM lista INNER JOIN usuario
ON lista.fk_id_usuario = usuario.id_usuario;

CREATE OR REPLACE VIEW Todas_canciones_listas AS
SELECT id_cancion,nombre_cancion,duracion,nombre_lista,likes,nombre_usuario,id_lista
FROM lista INNER JOIN usuario
ON lista.fk_id_usuario = usuario.id_usuario
INNER JOIN cancion_lista
ON lista.id_lista = cancion_lista.fk_id_lista
INNER JOIN cancion
ON cancion_lista.fk_id_cancion = cancion.id_cancion;

CREATE OR REPLACE VIEW Todas_canciones_info_listas AS
SELECT id_cancion,nombre_cancion,duracion,nombre_artista,nombre_genero,nombre_lista,nombre_usuario,ruta,id_lista,seq
FROM lista INNER JOIN usuario
ON lista.fk_id_usuario = usuario.id_usuario
INNER JOIN cancion_lista
ON lista.id_lista = cancion_lista.fk_id_lista
INNER JOIN cancion
ON cancion_lista.fk_id_cancion = cancion.id_cancion
INNER JOIN artista
ON artista.id_artista=cancion.fk_id_artista
INNER JOIN genero
ON cancion.fk_id_genero = genero.id_genero;

CREATE OR REPLACE VIEW all_music AS
SELECT *
FROM cancion INNER JOIN artista
ON cancion.fk_id_artista = artista.id_artista
INNER JOIN genero
ON cancion.fk_id_genero = genero.id_genero;
