var containsDuplicate = function(nums) {
	nums.sort();
	for(let i=1; i<nums.length; i++){
		if(nums[i-1]==nums[i]){
			return true
		}
	}
	return false
};
console.log(containsDuplicate([1,2,3,1]))


// for(let i=0; i<nums.length; i++){
	// 	for(let j=i+1; j<nums.length; j++){
	// 		console.log([i,j])
	// 		if(nums[i]==nums[j]){
	// 			return true;
	// 		}
	// 	}
	// }
	// return false