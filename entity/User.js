/**
 * User Class
 * @param {Object} deptno
 * @param {Object} dname
 * @param {Object} dloc
 */
function User(id, username, userpwd){
	this.id=id;
	this.username=username;
	this.userpwd=userpwd;
}

module.exports=User;