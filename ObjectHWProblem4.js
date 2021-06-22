// display all the prime number from an given array 
var num = [65,42,32,7,11,67,88,97,91,77,37,79]
var arr= []
for (var i=0; i<num.length; i++){
	var count = 0
	for (var j=1; j<=num[i]; j++ ){
		if (num[i]%j==0){
			count = count + 1;
		}
	}
	if (count == 2){
		arr.push(num[i])
	}
}

console.log(arr)
