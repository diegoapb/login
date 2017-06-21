/**
 * Created by diego on 20/06/17.
 */
console.log('estoy en el browser');

$(function(){


    console.log('estoy en mainplay');
    var audio=$('audio');
/*
    function play(evento){
        console.log('estoy play sigue evento');
        console.log(evento)
        audio[0].pause();
        console.log(evento);
        console.log(evento.data.ruta);
        audio.attr('src',(evento.data.ruta));
        audio[0].play();
    }
    */
    function probandoEscucha(evento){
        console.log(evento);
    }
    //(onclick='console.log(\'imprime'+cancion.ruta+' \')')
});

var audio=$('.audio');

function probandoEscucha(evento){
    console.log(evento);
    console.log(audio);
}

function play(evento){
    console.log('estoy play sigue evento');

    audio[0].pause();
    console.log(evento);
    console.log(audio);
    audio.attr('src',(evento.data.ruta));
    audio[0].play();
}