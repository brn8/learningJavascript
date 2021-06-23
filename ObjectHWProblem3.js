//identify weather given number (#13) is a prime or not 

function checksForPrimeNumber(num){
	var arr=[];
	for (var i=1; i<=num; i++){
		if(num%i==0){
			arr.push(i)
		}
	}

	if(arr.length==2){
		console.log("It's a Prime number")
	}
	else{
		console.log("It's not a Prime number")
	}
}
checksForPrimeNumber(10)