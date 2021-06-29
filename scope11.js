//example of hoisting
f();
//expression
var f = function (){
	console.log("Hello World")
}
f();

//named function 
function f (){
	console.log("Hello World 1")
}
