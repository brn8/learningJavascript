var createTargetArray = function(nums, index) {
	var target = []
	var arr = []
	for (var i=0; i<nums.length; i++){
		if(target[index[i]]==null){
			target[index[i]]=nums[i];
		}	
		else{
			for (var k=0; k<target.length; k++){
				arr[k]=target[k]
			}
			target[index[i]]=nums[i];
			for (j=index[i]; j<i; j++){
				target[j+1]=arr[j]
			}
		}
	}
	return target
};
console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))


