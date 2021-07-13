var majorityElement = function(nums) {
	nums.sort();
	var count = 1;
	var finalCount = 0;
	var index=0;
	if(nums.length==1){
		return nums[index]
	}
	for(let i=1; i<nums.length; i++){
		if(nums[i-1]==nums[i]){
			count++;
			if(nums.length-1==i && count>finalCount){
				finalCount=count;
				index=nums[i-1];
				count=1;
			}	
		}
		else if(count>finalCount){
			finalCount=count;
			index=nums[i-1];
			count=1
		}	
	}
	return index;
    
};
console.log(majorityElement([6]))