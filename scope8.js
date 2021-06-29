//example of hoisting
function f (){
	b=2
	var b;
	console.log(b)
}
f() //2
console.log(b) //reference error 