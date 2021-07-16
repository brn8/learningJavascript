var isPowerOfTwo = function(n) {
	if(n==1){
		return true
	}
	if(n%2==0 && n>1){
		return isPowerOfTwo(n/2)
	}
	return false
};
console.log(isPowerOfTwo(5))