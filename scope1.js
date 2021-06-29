/*
Whenever you use var, the rhs value of that variable is consider inside function scope
*/
function f (a){
	if(a==2){
		var c=1;
	}
	else {
		var c = 2
	}

	return a+c
}
console.log(f(2))