// 1,3,5
// 2,4
//complete this
//watch the video of merge sort 
function sortedNumbers(arr, arr1){
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
		for(let k=j; k<arr.length; k++){
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
var arr = [1,3,5]
var arr1 = [2,4,6,7,8,9]
console.log(sortedNumbers(arr,arr1))

