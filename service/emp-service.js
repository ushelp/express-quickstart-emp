var Emp=require('../entity/Emp');

// Dependency Injection
var empService=function(){
	
}

empService.list=function(){
	return new Promise((r,j)=>{
		r([
			new Emp(1001, 'SCOTT', '10'),
			new Emp(1020, 'ALLEN', '20'),
			new Emp(1030, 'SMITH', '20')
		]);
	});
}

// list
// add/save
// delete/remove
// edit/update
// get
// findByUsername
// findByPage

module.exports=empService