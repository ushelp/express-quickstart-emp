var Dept=require('../entity/Dept');

//Dependency Injection
var deptService=function(){
	
}

deptService.list=function(){
	return new Promise((r)=>{
		r([
			new Dept(10, 'ACCOUNTING', 'NEW YORK'),
			new Dept(20, 'RESEARCH', 'DALLAS'),
			new Dept(30, 'SALES', 'CHICAGO')
		]);
	})
}

module.exports=deptService