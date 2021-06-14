var shuffle = function(nums, n) {
	var arr = []
	var i = 0;
	for(var j=0; j<n; j++){
		arr[i]=nums[j]
		arr[i+1]=nums[j+n]
		i+=2;
    }
    return arr
};

console.log(shuffle([2,5,1,3],2))



