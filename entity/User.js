/**
 * User Class
 * @param {Object} id
 * @param {Object} username
 * @param {Object} password
 */
function User(id, username, password){
	this.id=id;
	this.username=username;
	this.password=password;
}

module.exports=User;