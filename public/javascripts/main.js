console.log('estoy en el browser');


$(function(){

	var audio=$('audio');
	var button=document.getElementById('btnlista');
	var bLista1=document.getElementById('lista1');
    var bLista2=document.getElementById('lista2');
    var bLista3=document.getElementById('lista3');
	var ur = 'player/canciones/all';

	function escuchasBotones(){
		button.addEventListener("click",function(){
			console.log(ur);
			ur = 'player/canciones/listaUsuario';
			console.log(ur);
			cargarCanciones();
		},false);
        bLista1.addEventListener("click",function(){
            console.log(ur);
            ur = 'player/canciones/lista1';
            console.log(ur);
            cargarCancionesTabla();
        },false);
        bLista2.addEventListener("click",function(){
            console.log(ur);
            ur = 'player/canciones/lista2';
            console.log(ur);
            cargarCancionesTabla();
        },false);
        bLista3.addEventListener("click",function(){
            console.log(ur);
            ur = 'player/canciones/lista3';
            console.log(ur);
            cargarCancionesTabla();
        },false);
	}


 
	function cargarCanciones(){
		$.ajax({
			url: ur
		}).done(function(datos){
			var lista = $('.list-group');
			console.log(datos.canciones[2]);
			lista.empty();
			datos.canciones.forEach(function(cancion){

				var nuevoElemento = $('<li class="list-group-item">'+cancion.nombre_cancion+'</li>')
				//var nuevoElemento = $('<a href="" class="list-group-item">'+cancion.nombre_cancion+'</a>')
				nuevoElemento
					.on('click',cancion,play)
					.appendTo(lista);
				  
			})
		}).fail(function(){
			alert('No pude cargar la cancion');
		})
	}

    function cargarCancionesTabla(){
        $.ajax({
            url: ur
        }).done(function(datos){
            var tabla = $('.table');
            console.log("hi");
            tabla.empty();
            var encabezado=$(
            	//'<table class="table table-hover">'+
            	'<thead>'+
                '<tr>' +
                '<th>Nombre</th>' +
                '<th>Duracion</th>' +
                '<th>Artista</th>' +
			 	'<th>Genero</th>' +
			 	'<th>Lista</th>' +
                '</tr>'+
                '</thead>'+
			'');
            encabezado
				.appendTo(tabla);

            datos.canciones.forEach(function(cancion){

                var nuevoElemento = $(
                	'<tbody>' +
					'<tr>' +
					'<td>'+cancion.nombre_cancion+'</td>' +
                    '<td>'+cancion.duracion+'</td>' +
                    '<td>'+cancion.nombre_artista+'</td>' +
                    '<td>'+cancion.nombre_genero+'</td>' +
					'<td>'+cancion.nombre_lista+'</td>' +
					'</tr>' +
					'</tbody>'+
				'');


                //var nuevoElemento = $('<a href="" class="list-group-item">'+cancion.nombre_cancion+'</a>')
                nuevoElemento
                    .on('click',cancion,play)
					.appendTo(tabla);

            })
        }).fail(function(){
            alert('No pude cargar la cancion');
        })
    }

	function play(evento){
		audio[0].pause();
		console.log(evento);
		console.log(evento.data.ruta);
		audio.attr('src',(evento.data.ruta));
		audio[0].play();
	}


    cargarCancionesTabla();
	escuchasBotones();
	//cargarCanciones();

});