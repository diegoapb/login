\c musica3

INSERT INTO  usuario(nombre_usuario, password,nombre_apellido, premium) VALUES ('trolololol@gmail.com', '1234' ,'robert kyo', TRUE);
INSERT INTO  usuario(nombre_usuario, password,nombre_apellido, premium) VALUES ('azulgrana@gmail.com', 'x123','julia azulejos', FALSE);
INSERT INTO  usuario(nombre_usuario, password,nombre_apellido, premium) VALUES ('tyler.durden@gmail.com', 'asdfd','cristhian triller', TRUE);

INSERT INTO lista(nombre_lista, fk_id_usuario) VALUES ('romanticona', 1);
INSERT INTO lista(nombre_lista, fk_id_usuario) VALUES ('pesada', 1);
INSERT INTO lista(nombre_lista, fk_id_usuario) VALUES ('pa bebe', 1);
INSERT INTO lista(nombre_lista, fk_id_usuario) VALUES ('rock en español', 2);
INSERT INTO lista(nombre_lista, fk_id_usuario) VALUES ('vallenatibiri', 2);
INSERT INTO lista(nombre_lista, fk_id_usuario) VALUES ('para bailar', 3);

INSERT INTO genero(nombre_genero) VALUES('clasica');
INSERT INTO genero(nombre_genero) VALUES('rock');
INSERT INTO genero(nombre_genero) VALUES('pop');
INSERT INTO genero(nombre_genero) VALUES('alternativa');
INSERT INTO genero(nombre_genero) VALUES('cantina');
INSERT INTO genero(nombre_genero) VALUES('bailable');
INSERT INTO genero(nombre_genero) VALUES('vallenato');
INSERT INTO genero(nombre_genero) VALUES('reggae');

INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Gali Galeano', DATE('01-01-1960'));
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Bob Marley', DATE('01-01-1960'));
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Vicente Fernandez', DATE('01-02-1955'));
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Britney Spears', DATE('05-03-1985'));
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Gran Combo', DATE('06-08-1970'));
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Ozzy Osbourne', DATE('01-01-1960'));
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('El Binomio de Oro', DATE('01-01-1985') );
INSERT INTO artista(nombre_artista, fecha_nacimiento) VALUES ('Johann Sebastian Bach', DATE('03-27-1685'));

INSERT INTO album(nombre_album, year) VALUES ('album 1', 1990);
INSERT INTO album(nombre_album, year) VALUES ('album 2', 1991);
INSERT INTO album(nombre_album, year) VALUES ('album 3', 1992);
INSERT INTO album(nombre_album, year) VALUES ('album 4', 1993);
INSERT INTO album(nombre_album, year) VALUES ('album 5', 1994);
INSERT INTO album(nombre_album, year) VALUES ('album 6', 1990);
INSERT INTO album(nombre_album, year) VALUES ('album 7', 1991);
INSERT INTO album(nombre_album, year) VALUES ('album 8', 1992);
INSERT INTO album(nombre_album, year) VALUES ('album 9', 1993);
INSERT INTO album(nombre_album, year) VALUES ('album 10', 1994);


INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 1', 300, '/home/music/cancion1.mp3', 1, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 2', 360, '/home/music/cancion2.mp3', 1, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 3', 320, '/home/music/cancion3.mp3', 1, 6);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 4', 305, '/home/music/cancion4.mp3', 2, 8);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 5', 362, '/home/music/cancion5.mp3', 2, 8);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 6', 323, '/home/music/cancion6.mp3', 2, 8);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 7', 450, '/home/music/cancion7.mp3', 2, 8);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 8', 300, '/home/music/cancion8.mp3', 2, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 9', 360, '/home/music/cancion9.mp3', 3, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 10', 320, '/home/music/cancion10.mp3', 3, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 11', 305, '/home/music/cancion11.mp3', 3, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 12', 362, '/home/music/cancion12.mp3', 3, 5);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 13', 323, '/home/music/cancion13.mp3', 4, 3);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 14', 450, '/home/music/cancion14.mp3', 4, 3);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 15', 300, '/home/music/cancion15.mp3', 5, 6);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 16', 360, '/home/music/cancion16.mp3', 5, 6);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 17', 320, '/home/music/cancion17.mp3', 5, 6);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 18', 305, '/home/music/cancion18.mp3', 5, 6);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 19', 362, '/home/music/cancion19.mp3', 6, 2);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 20', 323, '/home/music/cancion20.mp3', 6, 2);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 21', 111, '/home/music/cancion21.mp3', 6, 4);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 22', 222, '/home/music/cancion22.mp3', 7, 7);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 23', 325, '/home/music/cancion23.mp3', 7, 7);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 24', 320, '/home/music/cancion24.mp3', 7, 7);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 25', 305, '/home/music/cancion25.mp3', 7, 7);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 26', 362, '/home/music/cancion26.mp3', 7, 7);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 27', 156, '/home/music/cancion27.mp3', 7, 7);
INSERT INTO cancion(nombre_cancion, duracion, ruta, fk_id_artista, fk_id_genero) VALUES('Cancion 28', 512, '/home/music/cancion2.mp3', 8, 1);

INSERT INTO cancion_lista VALUES (1, 1);
INSERT INTO cancion_lista VALUES (2, 1);
INSERT INTO cancion_lista VALUES (3, 1);
INSERT INTO cancion_lista VALUES (4, 1);
INSERT INTO cancion_lista VALUES (5, 1);
INSERT INTO cancion_lista VALUES (1, 2);
INSERT INTO cancion_lista VALUES (2, 2);
INSERT INTO cancion_lista VALUES (7, 2);
INSERT INTO cancion_lista VALUES (8, 2);
INSERT INTO cancion_lista VALUES (9, 2);
INSERT INTO cancion_lista VALUES (1, 3);
INSERT INTO cancion_lista VALUES (7, 3);
INSERT INTO cancion_lista VALUES (10, 3);
INSERT INTO cancion_lista VALUES (11, 3);
INSERT INTO cancion_lista VALUES (12, 3);
INSERT INTO cancion_lista VALUES (12, 4);
INSERT INTO cancion_lista VALUES (13, 4);
INSERT INTO cancion_lista VALUES (14, 4);
INSERT INTO cancion_lista VALUES (15, 4);
INSERT INTO cancion_lista VALUES (16, 4);
INSERT INTO cancion_lista VALUES (17, 4);
INSERT INTO cancion_lista VALUES (18, 4);
INSERT INTO cancion_lista VALUES (19, 4);
INSERT INTO cancion_lista VALUES (20, 5);
INSERT INTO cancion_lista VALUES (21, 5);
INSERT INTO cancion_lista VALUES (1, 6);
INSERT INTO cancion_lista VALUES (2, 6);
INSERT INTO cancion_lista VALUES (10, 6);
INSERT INTO cancion_lista VALUES (11, 6);
INSERT INTO cancion_lista VALUES (12, 6);
INSERT INTO cancion_lista VALUES (13, 6);
INSERT INTO cancion_lista VALUES (21, 6);


