var replaceElements = function(arr) {
	for (var i=1; i<arr.length; i++){
		var greatestElement = 0 
		for (var j=i; j<arr.length; j++){
			if(arr[j]>greatestElement){
				greatestElement=arr[j]
			}
		}
		arr[i-1] = greatestElement; 
	}
	arr[arr.length-1]=-1
	return arr
};
console.log(replaceElements([17,18,5,4,6,1]))