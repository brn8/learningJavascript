var threeConsecutiveOdds = function(arr) {
	var x = []
	var count=0
	for (var i=0; i<arr.length; i++){
		if(arr[i]%2){
			x.push(true)
		}
		else{
			x.push(false)
		}
	}
	for (var l=0; l<x.length; l++){
		for (var k=l; k<l+Math.trunc((arr.length-l)/3); k+=3){
			if(x[k]==true && x[k+1]==true && x[k+2]==true){
				return true
			}
		} 
	}
	return false
};
console.log(threeConsecutiveOdds([1,3,3,3,4,6,7,23,12]));