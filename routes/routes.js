var express = require('express');
var router = express.Router();
var controllers =require('.././controllers');
var passport=require('passport');
var authMiddleware= require('.././middleware/auth');
var mediaserver = require('mediaserver');

router.get('/',controllers.HomeController.index);



/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

// rutas de usuario

router.get('/auth/signup',controllers.UserController.getSignUp);
router.post('/auth/signup',controllers.UserController.postSignUp);
router.get('/auth/signin',controllers.UserController.getSignIn);
router.post('/auth/signin', passport.authenticate('local',{
	successRedirect : '/users/panel',
	failureRedirect :'/auth/signin',
	failureFlash : true
}));
router.get('/explorar',controllers.exploreController.explore);
router.get('/auth/logout',controllers.UserController.logout);
router.get('/users/panel',authMiddleware.isLogged,controllers.UserController.getUserPanel);
router.get('/player',controllers.PlayerController.player);
router.get('/player/play',controllers.PlayerController.playplm);
router.get('/player/playpr',function(req,res,next){
		mediaserver.pipe(req,res,'plm.mp3');
	});
router.put('/explorar/like/:id_lista',controllers.exploreController.like);
router.get('/player/canciones/:tipo',controllers.PlayerController.getCanciones);
//router.get('/player/:ruta',controllers.PlayerController.canNombre);

router.get('/player/mislistas',controllers.PlayerController.getMisListas);

router.delete('/player/delete/:id_lista',controllers.PlayerController.deleteLista);

router.get('/explorar/explorePlayer/:id_lista',controllers.exploreController.explorePlayer);

router.get('/player/miListas/crearLista',controllers.PlayerController.getcrearLista);

router.post('/player/misListas/crearLista',controllers.PlayerController.postcrearLista);

router.get('/player/misListas/editarLista/:id_lista',controllers.PlayerController.getEditarLista);
router.put('/player/misListas/editarLista/:id_lista',controllers.PlayerController.putEditarLista);

router.delete('/player/misListas/editarLista/delete/:id_lista/:id_cancion',controllers.PlayerController.deleteCancionLista);

router.get('/pasarParam/:param1/:param2',function (req,res,next) {
	console.log(req.params.param1);
    console.log(req.params.param2);
});


module.exports = router;
