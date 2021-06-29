//example of closure
function f(a){
	function g(){
		let b = 2;
		return a + b
	}
	return g
}
let h = f(2);
console.log(h())

h= f(3)
console.log(h())