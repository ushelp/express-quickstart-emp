var express = require('express');
var empService = require('../service/emp-service.js');
var router = express.Router();

router.get('/',(req,res)=>{
	new empService(); // Dependency Injection
	
	empService.list().then((data)=>{
		res.render('emp/list', {list:data, user:req.session.USER});
	})
})

module.exports = router;
