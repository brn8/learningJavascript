//in hoisting, function gets the first priority 

console.log(typeof(f))
f()
var f = 5;
function f (){
	console.log("Hello world")
}