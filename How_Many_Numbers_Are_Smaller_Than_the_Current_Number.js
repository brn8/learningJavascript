var smallerNumbersThanCurrent = function(nums) {
	var arr=[]
	for (var i=0; i<nums.length; i++){
		var count = 0
		for (var j=0; j<nums.length; j++){
			if (nums[i]>nums[j]){
				count++
			}
		}
		arr[i]=count
	}
	return arr
    
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))