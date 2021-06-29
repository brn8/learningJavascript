/*
Whenever you use let, the rhs value of that variable is consider inside that block.
in this case, it consider inside the { block.
*/
function f (a){
	{
		let c = 2
	}
	return a+c //c is not defined
}
console.log(f(1));