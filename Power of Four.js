var isPowerOfFour = function(n) {
	if(n==1){
		return true
	}
	if(n%4==0 && n>3){
		return isPowerOfFour(n/4)
	}
	return false

};
console.log(isPowerOfFour(16))




