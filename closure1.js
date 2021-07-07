function add(num){
	return function(num1){
		return num + num1
	}
}
var a = add(5)
console.log(a(6))

var b = add(7)
console.log(b(6))

console.log(a(b(1)))