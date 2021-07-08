function bubbleSort(arr){
	for(let i=0; i<arr.length-2; i++){
		var count = 0;
		for(let j=0; j<arr.length-i-1; j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j]
				arr[j]=arr[j+1]
				arr[j+1]=temp
				count++;
			}
		}
		if(count==0){
			break;
		}
	}
	return arr
}
console.log(bubbleSort([1,2,9,8,5]))