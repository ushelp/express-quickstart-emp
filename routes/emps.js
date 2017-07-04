var express = require('express');
var empService = require('../service/emp-service.js');
var router = express.Router();

router.get('/',(req,res)=>{
	empService.list().then((data)=>{
		res.render('emp/list', {list:data, user:req.session.USER});
	})
})

module.exports = router;
