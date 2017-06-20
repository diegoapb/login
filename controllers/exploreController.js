/**
 * Created by diego on 19/06/17.
 */
module.exports = {
    explore : function (req,res,next){
        if(req.isAuthenticated()) {
            var pool = require('.././database/config');
            console.log(req.user.email);
            var datos;
            pool.query('SELECT * FROM Todas_listas',
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
    }
}