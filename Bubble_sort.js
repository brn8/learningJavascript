function bubbleSort(num){
	for (var i=0; i<num.length; i++){
		for (var j=i+1; j<num.length; j++){
			if(num[i]>num[j]){
				var temp = num[i];
				num[i]=num[j];
				num[j]=temp;
			}

		}
	}
	console.log(num)
}
bubbleSort([5,9,2,1,0,99,3])