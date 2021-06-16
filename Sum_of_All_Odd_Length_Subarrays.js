var sumOddLengthSubarrays = function(arr) {
	var count=0
	for (var i=0; i<arr.length; i++){
		for(var j=0; j<=arr.length; j++){
			if(j%2){
				if(i+j<=arr.length){
					for(var k=i; k<j+i; k++){
						count=count+arr[k]
					}
				}
			}
		}
	}
	return count
    
};
console.log(sumOddLengthSubarrays([1,4,2,5,3]))

