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
var arr = [1,10]
var arr1 = [5,7,9,20,25,100]
console.log(sortedNumbers(arr,arr1))

//INPUT
// arr = [3]
// arr1 = [1],

// arr = [1,2]
// arr1 = [3,4]

// arr = [1,7]
// arr1 = [2,5]

// arr = [1,10]
// arr1 = [5,7,9,20,25,100]


