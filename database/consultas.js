/**
 * Created by diego on 18/06/17.
 */

module.exports = {
    Todas_listas : function(req,res,next){
        console.log("estoy en consulta");
        var bd = require('.././database/config');

        bd.query('SELECT * FROM Todas_listas WHERE nombre_usuario = $1',[req.user.email],
            function(err,result)
            {
                if (err) throw err;
                res.send(query.Todas_listas);
            })

    }
}