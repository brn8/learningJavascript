var isPowerOfTwo = function(n) {
	if(n==1){
		return true
	}
	if(n%2==0 && n>1){
		var n = n/2;
		return isPowerOfTwo(n)
	}
	return false
};
console.log(isPowerOfTwo(5))