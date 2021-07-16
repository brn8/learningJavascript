var isPowerOfTwo = function(n) {
	if(n==1){
		return true
	}
	if(n%2==0 && n>1){
		var num = n/2;
		return isPowerOfTwo(num)
	}
	return false
};
console.log(isPowerOfTwo(5))