var maximumWealth = function(accounts) {
	var largestNum=0
	for (var i=0; i<accounts.length; i++){
		sum=0
		for (var j=0; j<accounts[i].length; j++){
			sum=sum+accounts[i][j]
		}
		if(sum>largestNum){
			largestNum=sum
		}
	}
	return largestNum
};
console.log(maximumWealth([[1,2],[1,2,1],[1,5]]))