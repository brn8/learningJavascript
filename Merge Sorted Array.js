function sortNumber(a, b) {
   return a - b;
}
var merge = function(nums1, m, nums2, n) {
	 if(n==0){
		return nums1
	}
	else{
		var count = m;
		for(let i = 0; i<n; i++){
			nums1[count]=nums2[i];
			count++;
		}
	}
	return nums1.sort(sortNumber)
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
