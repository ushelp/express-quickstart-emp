var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data=null;
	if(req.query.t){
		if(req.query.t==1){
			data={msg:'Username or password is incorrect!'}
		}else if(req.query.t==2){
			data={msg:'Not yet logged in, please login first!'}
		}
	}
	res.render('index', data);
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
	res.render('admin/admin',{user: req.session.USER})
});

module.exports = router;
