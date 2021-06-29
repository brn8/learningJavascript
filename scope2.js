/*
Whenever you use let, the rhs value of that variable is consider inside that block
*/
function f (a){
	if(a==2){
		let c=1;
	}
	else {
		let c = 2
	}
	return a+c //reference error
}
console.log(f(2));