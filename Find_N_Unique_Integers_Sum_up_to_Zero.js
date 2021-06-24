var sumZero = function(n) {
	var arr = [];
	var count = 0
	if(n>=3){
		for (var i=0; i<n-2; i++){
			arr[i]=(Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * 10);
			count = count + arr[i]
		}
		arr[n-2]=0
	}
	arr[n-1]=-1*count
	return arr
};
console.log(sumZero(5))



