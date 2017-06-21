/**
 * Created by diego on 19/06/17.
 */
module.exports = {
    explore : function (req,res,next){
        if(req.isAuthenticated()) {
            var pool = require('.././database/config');
            console.log(req.user.email);
            var datos;
            pool.query('SELECT * FROM Todas_listas ORDER BY id_lista',
                function (err, result) {
                    if (err) throw err;
                    console.log(datos);
                    res.render('explorar/explorar', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        listas: result.rows
                    })
                })

        }else{res.redirect('/auth/signin')}
    },

    like : function (req,res,next) {
        console.log(req.params.id_lista);
        var pool = require('.././database/config');
        pool.query('UPDATE lista SET likes=likes+1 WHERE id_lista=$1',
            [req.params.id_lista],
            function(err,result)
            {
                if (err) throw err;
                res.redirect('/explorar');
            })
    },
    explorePlayer :function (req,res,next) {
        if(req.isAuthenticated){
           var pool = require('.././database/config');
           console.log(req.params.id_lista);
            console.log(req.params.id_lista=="all");
           if(req.params.id_lista=="all"){
               pool.query('SELECT * FROM all_music ORDER BY id_cancion',
                   function (err, result) {
                       if (err) throw err;
                       res.render('explorar/playerExplore', {
                           isAuthenticated: req.isAuthenticated(),
                           user: req.user,
                           canciones: result.rows
                       })
                   })
           }else{
               pool.query('SELECT * FROM todas_canciones_info_listas WHERE id_lista = $1',
                   [req.params.id_lista],
                   function (err, result) {
                       if (err) throw err;
                       console.log(result.rows);
                       res.render('explorar/playerExplore', {
                           isAuthenticated: req.isAuthenticated(),
                           user: req.user,
                           canciones: result.rows
                       })
                   })
           }
        }else{res.redirect('/auth/signin')}

    }
}