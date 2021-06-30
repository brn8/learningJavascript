var lastStoneWeight = function(stones) {
	var len = stones.length-1;
	for (let i=0; i<len; i++){
	var firstHighest= 0
	var firstHighestIndex = 0
	var secondHighest=0
	var secondHighestIndex = 0
	for (let i=0; i<stones.length; i++){
		if(stones[i]>firstHighest){
			firstHighest=stones[i]
			firstHighestIndex=i
		}
	}
	for (let i=0; i<stones.length; i++){
		if(stones[i]>secondHighest && i != firstHighestIndex){
			secondHighest=stones[i]
			secondHighestIndex=i
		}
	}
	var dif = firstHighest-secondHighest
	stones[firstHighestIndex]=dif
	const index = stones.indexOf(secondHighest);
  	stones.splice(index, 1);
	
}
	return stones
};
console.log(lastStoneWeight([5,8,8,8,9]))

