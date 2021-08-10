var repeatedNTimes = function(nums) {
	for(let i=0; i<nums.length; i++){
		for(let j=i+1; j<nums.length; j++){
			if(nums[i]==nums[j]){
				return nums[i]
			}
		}
	}
			
};
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));


