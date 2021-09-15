var nextGreaterElements = function(nums) {
	var arr = [];
	for(let i=0; i<nums.length; i++){
		var count = 0;
		for(let j=i+1; j<nums.length; j++){
			if(nums[i]<nums[j]){
				arr.push(nums[j]);
				count++;
				break;
			}
		}
		while(count==0){
			for(let k=0; k<nums.length; k++){
				if(nums[i]<nums[k]){
					arr.push(nums[k]);
					count++;
					break;
				}
			}
			if(count==0){
				arr.push(-1);
				break;
			}
		}
	}
	return arr
};
console.log(nextGreaterElements([1,2,3,4,3]));