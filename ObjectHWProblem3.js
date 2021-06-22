//identify weather given number (#13) is a prime or not 
var num = 13;
var arr=[];
for (var i=1; i<=num; i++){
	if(num%i==0){
		arr.push(i)
	}
}

if(arr.length==2){
	console.log("It's a Prime number")
}