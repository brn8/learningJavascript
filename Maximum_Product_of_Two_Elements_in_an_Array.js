//This program does the product of two maximum elements in an array
var maxProduct = function(nums) {
	for (i=0; i<nums.length; i++){
		for (j=i+1; j<nums.length; j++){
			if(nums[i]>nums[j]){
				var temp=nums[i]
				nums[i]=nums[j]
				nums[j]=temp
			}
		}
	}
	calculation = (nums[nums.length-1]-1)*(nums[nums.length-2]-1)
	return calculation
    
};
console.log(maxProduct([1,5,4,5]))