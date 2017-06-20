var mediaserver = require('mediaserver');
var path =require('path');

module.exports = {

	player : function(req,res,next){
		res.render('player/player',{
            isAuthenticated : req.isAuthenticated(),
            user : req.user})
	},

    getMisListas : function(req,res,next){
		console.log(req.isAuthenticated());
		if(req.isAuthenticated()) {
            var pool = require('.././database/config');
            console.log(req.user.email);
            var datos;
            pool.query('SELECT * FROM Todas_listas WHERE nombre_usuario = $1', [req.user.email],
                function (err, result) {
                    if (err) throw err;
                    console.log(datos);
                    res.render('player/misListas', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        listas: result.rows
                    })
                })

        }else{res.redirect('/auth/signin')}
	},


	player2 : function(req,res,next){
		var media = require('.././music/mediaserver');
		var cancion = "plm.mp3";
		console.log(cancion);
		media.pipe(req,res,'..//music/plm.mp3');

	}, 
	player1 : function(req,res,next){
		return res.render('player/player')
	},
	playplm : function(req,res,next){
		mediaserver.pipe(req,res,'plm.mp3');
	},

	getCanciones : function(req,res,next){
		var pool = require('.././database/config');
		var tipo =req.params.tipo;
		console.log(tipo);
		console.log(req.user);
		switch(tipo){
			case "all":
				pool.query('SELECT * FROM cancion ORDER BY id_cancion ',
					function(err,result)
				{
					if (err) throw err;
					res.send({canciones :result.rows,tp : tipo});
			})
				break;
			case "listasycanciones":
				pool.query('SELECT * FROM todas_las_listas ',
					function(err,result)
					{
						if (err) throw err;
						res.send({canciones :result.rows,tp : tipo});
					})
				break;

			case "listaUsuario":
				console.log(req.user.email);
				pool.query('SELECT * FROM Todas_canciones_listas WHERE nombre_usuario = $1',[req.user.email],
					function(err,result)
					{
						if (err) throw err;
						res.send({canciones :result.rows,tp : tipo});
					})
				break;

        }

		
	},


	canciones: function(req,res,next){
		var pool = require('.././database/config');
		pool.query('SELECT * FROM cancion ORDER BY id_cancion',function(err,result){
			if (err) throw err;
			res.send(result.rows)
		})
	},

	canNombre : function (req,res,next){
		var cancion = path.join('music/',req.params.ruta);
		console.log(cancion);
		mediaserver.pipe(req,res,cancion);
	}





	
}