

module.exports = {
    getSignUp : function (req, res, next){
        return res.render('users/signup');
    },

    postSignUp: function(req,res,next){

        console.log(req.body);      

        var user = {
            nombre_usuario : req.body.email,
            nombre_apellido : req.body.nombre,
            password : req.body.password
        };
        console.log(user);
        
        var pool = require('.././database/config');
        console.log(pool);

        pool.query('insert into usuario (nombre_usuario,password,nombre_apellido)values($1, $2, $3)',
            [user.nombre_usuario,user.password,user.nombre_apellido],
            function(err,result){
                if(err)throw err;
        });
        req.flash('info', 'Se ha registrado correctamente,ya puede iniciar sesion');
        return res.redirect('/auth/signin');
    },

    getSignIn: function (req, res, next){
        return res.render('users/signin',{message: req.flash('info'),authmessage: req.flash('authmessage')});
    },
    ConsultaConsola: function(req,res,next){

        var pool = require('.././database/config');
        console.log(pool);

        pool.query('SELECT * FROM usuario',
            function(err,result){
                if(err)throw err;
                // just print the result to the console
                console.log(result.rows);
        });
    },

    logout : function (req,res,next){
        req.logout();
        return res.redirect('/auth/signin');
    },

    getUserPanel : function (req,res,next){
        res.render('users/panel',{
            isAuthenticated : req.isAuthenticated(),
            user : req.user
        });
    }

    /*

    postSignUp1: function(req,res,next){

        console.log(req.body);      

        var user = {
            nombre_usuario : req.body.email,
            nombre_apellido : req.body.nombre,
            password : req.body.password
        };

        console.log(user);
        
        var config = require('.././database/config');
        console.log(config);

        var client = new pg.Client (config);
        client.connect(function (err) {
            if (err) throw err;

          // execute a query on our database
            client.query('SELECT * FROM usuario', function (err, result) {
                if (err) throw err;

                // just print the result to the console
                console.log(result.rows); // outputs: { name: 'brianc' }

                // disconnect the client
                client.end(function (err) {
                    if (err) throw err;
                });
            });
        });
    }*/
}

