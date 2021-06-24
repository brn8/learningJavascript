 function insertionSort(num){
 	for (var i=1; i<num.length; i++){
 		for (var j=i; j>0; j--){
 			if(num[j]<num[j-1]){
 				var temp = num[j-1];
 				num[j-1]= num[j];
 				num[j]=temp;
 			}
 		}
 	}
 	return num

 }
 console.log(insertionSort([10,3,15,1,9]));