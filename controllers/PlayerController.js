var mediaserver = require('mediaserver');
var path =require('path');

module.exports = {

	player : function(req,res,next) {
        if (req.isAuthenticated()) {
            res.render('player/player', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user
            })
        } else {
            res.redirect('/auth/signin')
        }
    },

    getMisListas : function(req,res,next){
		console.log(req.isAuthenticated());
		if(req.isAuthenticated()) {
            var pool = require('.././database/config');
            console.log(req.user.email);
            var datos;
            pool.query('SELECT * FROM Todas_listas WHERE nombre_usuario = $1 ORDER BY id_lista', [req.user.email],
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

	deleteLista : function (req,res,next){
        var pool = require('.././database/config');
        pool.query('DELETE FROM lista WHERE id_lista= $1',
			[req.params.id_lista],
            function(err,result)
            {
                if (err) throw err;
                res.redirect('/player/mislistas');
            })
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
				pool.query('SELECT * FROM todas_canciones_info_listas WHERE nombre_usuario = $1 ORDER BY nombre_lista,nombre_cancion',
					[req.user.email],
					function(err,result)
				{
					if (err) throw err;
					res.send({canciones :result.rows,tp : tipo});
			})
				break;

			case "lista1":
				console.log(req.user.email);
				pool.query('SELECT * FROM Todas_canciones_info_listas WHERE nombre_usuario = $1 AND id_lista = 1',[req.user.email],
					function(err,result)
					{
						if (err) throw err;
						res.send({canciones :result.rows,tp : tipo});
					})
				break;
            case "lista2":
                console.log(req.user.email);
                pool.query('SELECT * FROM Todas_canciones_info_listas WHERE nombre_usuario = $1 AND id_lista = 2',[req.user.email],
                    function(err,result)
                    {
                        if (err) throw err;
                        res.send({canciones :result.rows,tp : tipo});
                    })
                break;
            case "lista3":
                console.log(req.user.email);
                pool.query('SELECT * FROM Todas_canciones_info_listas WHERE nombre_usuario = $1 AND id_lista = 3',[req.user.email],
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
	},

	getcrearLista : function (req, res, next) {
        if (req.isAuthenticated()) {
            res.render('player/crearLista', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user
            })
        } else {
            res.redirect('/auth/signin')
        }
	},
    postcrearLista : function (req, res, next) {
		var lista={
			nombre_lista : req.body.nombreLista
		};
		console.log(req.user.id);
		console.log(req.user.email);
        var pool = require('.././database/config');
        pool.query('insert into lista (nombre_lista,fk_id_usuario)values($1,$2)',
            [lista.nombre_lista,req.user.id],
            function(err,result){
                if(err)throw err;
            });
        req.flash('info', 'Se ha registrado correctamente,ya puede iniciar sesion');
        return res.redirect('/explorar/explorePlayer/all');
    },
    getEditarLista : function (req,res,next) {
        if (req.isAuthenticated()) {
        	console.log(req.params.id_lista);
            console.log(req.user.email);
        	var pool = require('.././database/config');
            pool.query('SELECT * FROM Todas_canciones_info_listas WHERE id_lista = $1 AND nombre_usuario = $2',
				[req.params.id_lista,req.user.email],
                function (err, result) {
                    if (err) throw err;

                    console.log(result.rows);
                    res.render('player/editarLista', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        list: result.rows
                    })
                })


        } else {
            res.redirect('/auth/signin')
        }
		
    },


    putEditarLista : function (req,res,next) {
        console.log(req.params.id_lista);
        console.log(req.body.nombreLista);
        var pool = require('.././database/config');
        pool.query('UPDATE lista SET nombre_lista = $1  WHERE id_lista = $2',
            [req.body.nombreLista,req.params.id_lista],
            function(err,result)
            {
                if (err) throw err;
                res.redirect('/player/mislistas/');
            }
        )

		
    },
    deleteCancionLista : function (req,res,next) {
	console.log(req.params.id_lista);
        var pool = require('.././database/config');
        pool.query('DELETE FROM cancion_lista WHERE fk_id_lista = $1 AND fk_id_cancion = $2',
            [req.params.id_lista,req.params.id_cancion],
            function(err,result)
            {
                if (err) throw err;
                res.redirect('/player/mislistas/editarLista/'+req.params.id_lista);
            }
            )

	}
}