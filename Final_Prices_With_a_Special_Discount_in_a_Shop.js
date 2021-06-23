var finalPrices = function(prices) {
	for (var i = 0; i<prices.length; i++){
		for (var j = i+1; j<=prices.length-1; j++){
			if(prices[i]>=prices[j]){
				prices[i]=prices[i]-prices[j];
				break;
			}
		}
	}
    return prices
};
console.log(finalPrices([8,4,6,2,3]))