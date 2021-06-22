//Leetcode#: 905

var sortArrayByParity = function(nums) {
	var numbers = []
	var oddNums = []
	for (var i=0; i<nums.length; i++){
		if(nums[i]%2==0){
			numbers.push(nums[i]);
		}
		else{
			oddNums.push(nums[i])
		}
	}
	for (j=0; j<oddNums.length; j++){
		numbers.push(oddNums[j]);
	}
	return numbers
    
};
console.log(sortArrayByParity([3,1,2,4]))

