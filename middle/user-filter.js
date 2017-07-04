var userFilter=function(req, res, next){
	if(req.session.USER){
		next();
	}else{
		res.redirect('/?t=2');
	}
}

module.exports=userFilter;