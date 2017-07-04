var express = require('express');
var deptService = require('../service/dept-service.js');
var router = express.Router();

router.get('/',(req,res)=>{
	deptService.list().then((data)=>{
		res.render('dept/list', {list:data, user:req.session.USER});
	})
})


module.exports = router;
