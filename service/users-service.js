var User=require('../entity/User');

var usersService={
	login:function(username,userpwd){
		return new Promise((r,j)=>{
			if(username.toLowerCase()=='jay' && userpwd=='123'){
				 r(new User(1000, username, userpwd));
			}else{
				r(null);
			}
		})
	},
	list:function(){
	},
	delete:function(){
	}
}

module.exports=usersService