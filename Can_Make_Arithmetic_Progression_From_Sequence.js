var canMakeArithmeticProgression = function(arr) {
	var x = "";
	// arranging the numbers from least to greatest using insertion sort 
	for (var i=1; i<arr.length; i++){
		for (var j=i; j>0; j--){
			if (arr[j]<arr[j-1]){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j]=temp;
			}
			else {
				break;			
			}
		}
	}
	// finding the difference 
	var difference = arr[1]-arr[0]
	for (var i=1; i<arr.length; i++){
		// if the difference between two elements is the same then it will return true else it will return false.
		if((arr[i]-arr[i-1]) == difference){
			x = true
		}
		else {
			x= false;
			break;
		} 
	}
	
	return x;
  
};
console.log(canMakeArithmeticProgression([20,17,-18,-13,13,-14,-8,10,1,14,-19]));