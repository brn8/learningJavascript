//Display all the prime number between 1-100
var arr = []
for (var i=1; i<=100; i++){
	var count = 0
	for (var j=1; j<=i; j++){
		if (i%j==0){
			count++
		}
	}
	if (count == 2){
		arr.push(i)
	}

}
console.log(arr)