function merge(arr, arr1){
	var temp_arr=[]
	var i = 0;
	var j = 0;
	for(;i<arr.length && j<arr1.length; ){
		if(arr[i]<arr1[j] ){
			temp_arr.push(arr[i])
			i++;
		}
		else{
			temp_arr.push(arr1[j])
			j++
		}
	}
	if(i<arr.length){
		for(let k=i; k<arr.length; k++){
			temp_arr.push(arr[k])
		}
	}
	if(j<arr1.length){
		for(let k=j; k<arr1.length; k++){
			temp_arr.push(arr1[k])
		}
	}
	
	return temp_arr
}

function mergeSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var mid = Math.trunc((arr.length)/2)
	var left = (arr.slice(0,mid))
	var right=(arr.slice(mid,arr.length))
	var arr1 = mergeSort(left);
	var arr2 = mergeSort(right);
	return merge(arr1,arr2)
	
}

console.log(mergeSort([5,7,6,5]))
