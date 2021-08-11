var intersection = function(nums1, nums2) {
	var arr = [];
	for (let i=0; i<nums1.length; i++){
		for (let j=0; j<nums2.length; j++){
			if(nums1[i]==nums2[j]){
				arr.push(nums1[i]);
				break;
			}
		}
	}
	return [... new Set(arr)];
};
console.log(intersection([1,2,2,1], [2,2]));