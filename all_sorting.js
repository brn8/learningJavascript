/* Selection sort
Time Complexity	 
Best	O(n2)
Worst	O(n2)
Average	O(n2)
Space Complexity	O(1)
Stability	No
var selectionSort = function(arr){
	for(let i=0; i<arr.length; i++){
		var minimumNum = arr[i];
		var index=i;
		for(let j=i+1; j<arr.length; j++){
			if(minimumNum>arr[j]){
				minimumNum=arr[j];
				index=j;
			}
		}
		var temp = arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
	return arr
}
console.log(selectionSort([14,33,27,10,35,19,42,44]))
*/

/* Bubble sort
Time Complexity	 
Best	O(n)
Worst	O(n2)
Average	O(n2)
Space Complexity	O(1)
Stability	Yes
var bubbleSort = function(arr){
	for(let i =0; i<arr.length-1; i++){
		var count = 0
		for(let j=0; j<arr.length-1-i; j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j]
				arr[j]=arr[j+1]
				arr[j+1]=temp;
				count++
			}
		}
		if(count==0){
			break;
		}
	}
	return arr
}
console.log(bubbleSort([10,20,40,50,30]))
*/
/*insertion sort
Time Complexity	 
Best	O(n)
Worst	O(n2)
Average	O(n2)
Space Complexity	O(1)
var insertionSort = function(arr){
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j>0; j--){
			if(arr[j-1]>arr[j]){
				var temp = arr[j-1];
				arr[j-1]=arr[j]
				arr[j]=temp
			}
			else{
				break;
			}
		}
	}
	return arr
}
console.log(insertionSort([25,17,31,13,2]));
*/
/*mergesort
Time Complexity	 
Best	O(n*Logn)
Worst	O(n*Logn)
Average	O(n*Logn)
Space Complexity	O(1)
var merge = function(arr1,arr2){
	var arr = []
	var i = 0;
	var j= 0;
	for(;i<arr1.length && j<arr2.length;){
		if(arr1[i]<arr2[j]){
			arr.push(arr1[i]);
			i++
		}
		if(arr1[i]>arr2[j]){
			arr.push(arr2[j]);
			j++
		}
	} 
	if(i<arr1.length){
		for(let k=i; k<arr1.length;k++){
			arr.push(arr1[k]);
		}
	}
	if(j<arr2.length){
		for(let k=j; k<arr2.length;k++){
			arr.push(arr2[k]);
		}
	}
	return arr
}
var mergeSort = function(arr) {
	if(arr.length<=1){
		return arr
	}
	var mid = Math.trunc((arr.length)/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid,right);
	var arr1 = mergeSort(left);
	var arr2 = mergeSort(right);
	return merge(arr1,arr2)
}
console.log(mergeSort([14,33,27,10,35,19,42,44]));
*/

/*binary search
var binarySearch = function(arr,num,starting, ending){
	var mid = Math.trunc((starting+ending)/2);
	if(starting>ending){
		return -1
	}
	if(num==arr[mid]){
		return mid
	}
	if(num<arr[mid]){
		return binarySearch(arr,num,starting,mid-1)
	}
	if(num>arr[mid]){
		return binarySearch(arr,num,mid+1,ending)
	}
}
var array = [10,20,30,40,50,60,70,80,90,100];
console.log(binarySearch(array,60,0,array.length-1));
*/