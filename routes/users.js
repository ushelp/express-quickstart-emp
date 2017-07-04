var express = require('express');
var usersService = require('../service/users-service.js');
var router = express.Router();

router.post('/login', (req,res)=>{
	
	var username=req.body.username;
	var userpwd=req.body.userpwd;
	
	usersService.login(username, userpwd).then((user)=>{
		req.session.USER=user;
		if(user){
			res.redirect('/admin');
		}else{
			// 1: login failed 
			// 2: not logged in
			res.redirect('/?t=1');
		}
	})
	
})

router.get('/logout', (req,res)=>{
	req.session.destroy();
	res.redirect('/')
});
	
//
//
//
///* GET users listing. */
//router.all('/', function(req, res, next) {
//	res.render('users', {
//		list: [{
//				name: "Jay",sex: 'M'
//			},
//			{
//				name: "Rose", sex: 'F'
//			},
//			{
//				name: "Anna ", sex: 'F'
//			}
//		]
//	});
//
//});
//
///* GET test users get by userid. */
//router.get('/:userid', function(req, res, next) {
//	var session = req.session;
//	
//	res.json({
//		id: req.params.userid,
//		sid: session.id,
//		info: 'get user info!'
//	});
//});
//
///* GET Users session destroy. */
//router.get('/logout', function(req, res, next) {
//	var session = req.session;
//	if(session){
//		session.destroy()
//	};
//	res.send('user logout');
//
//});
//
//
///* DELETE Users remove. */
//router.delete('/:userid', function(req, res, next) {
//	res.json({
//		code: 0,
//		method: 'HTTP DELETE',
//		msg:`${req.params.userid} Remove success!`
//	});
//});
//
//
///*
// * ---------------------
// * Upload
// * --------------------
// */
//const multer = require('multer');
//
//// upload dest
//// const upload=multer({dest:'uploads/'})
//
//// Custom upload storage
//var storage = multer.diskStorage({
//	destination: function(req, file, cb) {
//		cb(null, 'uploads/')
//	},
//	filename: function(req, file, cb) {
//		cb(null, Date.now() + '-' + file.originalname)
//	}
//})
//const upload = multer({storage: storage})
//
///* POST User upload photos demo*/
//router.post('/upload', upload.array('photos', 12), function(req, res, next) {
//	for(var i = 0; i < req.files.length; i++) {
//		console.info('======================');
//		console.info(req.files[i].fieldname);
//		console.info(req.files[i].originalname);
//		console.info(req.files[i].encoding);
//		console.info(req.files[i].mimetype);
//		console.info(req.files[i].size);
//		console.info(req.files[i].destination);
//		console.info(req.files[i].filename);
//		console.info(req.files[i].path);
//		console.info(req.files[i].buffer);
//		console.info('======================');
//	}
//	res.json({
//		'msg': 'ok'
//	});
//})

module.exports = router;
