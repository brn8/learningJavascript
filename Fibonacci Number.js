var fib = function(n) {
	var arr = [];
	arr[0]=0;
	arr[1]=1
	if(n>1){
		for(let i=2; i<n; i++){
			arr.push(arr[i-2]+arr[i-1])
		}
		return arr[n-1]+arr[n-2]
	}
	else{
		return arr[n]
	}
};
console.log(fib(1))