/*
Whenever you use const, the rhs value of that variable is consider inside that block.
in this case, it consider inside if and else block. Also Whenever you use const, 
it's rhs value can't be changed
*/
function f (a){
	if(a==2){
		const c=1;
	}
	else {
		const c = 2
	}
	return a+c //reference error
}
console.log(f(1));
