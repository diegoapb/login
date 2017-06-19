var LocalStrategy = require('passport-local').Strategy;
var pg = require ('pg')

module.exports = function(passport){

	passport.serializeUser(function(user,done){
		done (null,user);

	});

	passport.deserializeUser(function(obj,done){
		done (null,obj);
	});

	passport.use(new LocalStrategy({
		passReqToCallback : true
	}, function (req,email,password,done){
		console.log(email);
		
			var pool = require('.././database/config');

			//console.log(pool);

			/*pool.query('SELECT * FROM usuario WHERE nombre_usuario = \''+email+'\'',
            function(err,result){
                if(err)throw err;
                // just print the result to the console
                console.log(result.rows);
                return;
        	});*/

			pool.query('SELECT * FROM usuario WHERE nombre_usuario = \''+email+'\'', function(err,result){
				if (err) throw err;

				console.log(result.rows.length)

				if(result.rows.length > 0){

					var user = result.rows [0];
					
					console.log(user);

					if (password==user.password){
						return done(null,{
							id:user.id_usuario,
							nombre:user.nombre_apellido,
							email:user.nombre_usuario
						});
					}
				}
				return done (null,false,req.flash('authmessage', 'email o password incorrecto'));
			});
		}
	));

};