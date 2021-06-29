function power(n,k){
	if(k==0){
		return 1
	}
	return n*power(n, k-1)
}
console.log(power(2,3))
