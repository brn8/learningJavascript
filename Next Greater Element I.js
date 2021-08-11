var nextGreaterElement = function(nums1, nums2){
	var arr = [];
	for (let i=0; i<nums1.length; i++){
		var index = i;
		var count = 0;
		for (let j=0; j<nums2.length; j++){
			if(nums1[i]==nums2[j]){
				index=j;
				break;
			}
		}
		for(let k=index; k<nums2.length; k++){
			if(nums2[k]>nums1[i]){
				arr.push(nums2[k]);
				count++;
				break;
			}
		}
		if(count==0){
			arr.push(-1);
		}
	}
	return arr
};
console.log(nextGreaterElement([2,4],[1,2,3,4]));