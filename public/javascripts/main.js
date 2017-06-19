console.log('estoy en el browser');


$(function(){

	var audio=$('audio');
	var ur = 'player/canciones/all';

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

	function play(evento){
		audio[0].pause();
		console.log('/player/'+evento.data.ruta);
		audio.attr('src',('/player/'+evento.data.ruta));
		audio[0].play();

	}

	function setUrl(){

	}


	cargarCanciones();
	
});