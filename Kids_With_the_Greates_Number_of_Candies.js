var kidsWithCandies = function(candies, extraCandies) {
	var largestNumber = 0
	var arr = []
	for (var i=0; i<candies.length; i++){
		if(candies[i]>largestNumber){
			largestNumber=candies[i]
		}
	}
	for (var i=0; i<candies.length; i++){
		if((candies[i]+extraCandies)>=largestNumber){
			arr[i]=true
		}
		else{
			arr[i]=false
		}
	}
	return arr

};
console.log(kidsWithCandies([2,3,5,1,3],3))