var decompressRLElist = function(nums) {
	var arr = []
	var count = 0
	for(var i=0; i<(nums.length)/2; i++){
		for(var j=0; j<nums[2*i]; j++){
			arr[count]=nums[(2*(i+1))-1]
			count++;
		}

	}
	return arr
    
};

console.log(decompressRLElist([1,2,3,4]))