var maxAscendingSum = function(nums) {
	var arr = [];
	var count = nums[0];
	var index = nums[0];
	for (var i=1; i<nums.length; i+=1){
		if (index<nums[i]){
			index = nums[i];
			count=count+nums[i];
			arr.push(count)
		}
		else{
			index = nums[i];
			arr.push(count)
			count = nums[i];
		}
	}
	for (var i=0; i<arr.length; i++){
		for (var j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				var temp = arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	if (nums.length==1){
		return nums[0];
	}
	else{
		return (arr[arr.length-1])
	}
};
console.log(maxAscendingSum([10]))