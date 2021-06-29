/*
Whenever you use const, the rhs value of that variable is consider inside that block.
in this case, it consider inside function block. Also Whenever you use const, 
it's rhs value can't be changed
*/
function f (a){
	const c = 2
	return a+c //3
}
console.log(f(1));
