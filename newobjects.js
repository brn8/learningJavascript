var a = {
	x: 10,
	y:20
}

console.log(a.x);

var b = a;
b.x=20;
b.z=100;
b.z=function(){
	return "hello"
}
console.log(b.x);
console.log(a.x);
console.log(b.z);