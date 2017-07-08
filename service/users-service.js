var User=require('../entity/User');

// Dependency Injection
function usersService(){
}
	
usersService.login=function(username,userpwd){
	return new Promise((r,j)=>{
		if(username.toLowerCase()=='jay' && userpwd=='123'){
			 r(new User(1000, username, userpwd));
		}else{
			r(null);
		}
	})
}

usersService.list=function(){
}

usersService.deleteUsers=function(){
}

module.exports=usersService