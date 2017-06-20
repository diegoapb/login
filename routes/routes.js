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

router.get('/player/canciones/:tipo',controllers.PlayerController.getCanciones);
//router.get('/player/:ruta',controllers.PlayerController.canNombre);

router.get('/player/mislistas',controllers.PlayerController.getMisListas);


module.exports = router;
