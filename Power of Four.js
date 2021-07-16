var isPowerOfFour = function(n) {
	if(n==1){
		return true
	}
	if(n%4==0 && n>3){
		var num = n/4;
		return isPowerOfFour(num)
	}
	return false

};
console.log(isPowerOfFour(16))




