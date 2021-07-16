var isPowerOfThree = function(n) {
	if(n==1){
		return true
	}
	if(n%3==0 && n>2){
		return isPowerOfThree(n/3)
	}
	return false
};
console.log(isPowerOfThree(27));