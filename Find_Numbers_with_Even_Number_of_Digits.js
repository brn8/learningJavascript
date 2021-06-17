// This program counts how many numbers are there in an array with a Even Number of Digits
var findNumbers = function(nums) {
	var count = 0; 
	for (var i=0; i<nums.length; i++){
		if (nums[i].toString().length%2==0){ //checks if the nums[i] has an even number of digits 
			count=count+1 
		
	}
	return count 
    
};
console.log(findNumbers([12,345,2,6,7896]))