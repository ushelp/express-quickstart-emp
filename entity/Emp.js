/**
 * Emp Class
 * @param {Object} deptno
 * @param {Object} dname
 * @param {Object} dloc
 */

class Emp {
	
    constructor(empno, ename, deptno){
		this.empno=empno;
		this.ename=ename;
		this.deptno=deptno;
	};
}

module.exports=Emp;