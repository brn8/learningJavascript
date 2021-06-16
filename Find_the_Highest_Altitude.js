var largestAltitude = function(gain) {
	var arr = []
	var sum = 0
	var largestNumber=0
	arr[0]=0
	for (var i=0; i<gain.length; i++){
		sum=sum+gain[i]
		arr[i+1]=sum
	}
	for (var j=0; j<arr.length; j++){
		if (arr[j]>=largestNumber){
			largestNumber=arr[j]
		}
	}
	return largestNumber
};
console.log(largestAltitude([-5,1,5,0,-7]))