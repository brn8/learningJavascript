var finalPrices = function(prices) {
	for (let i=0; i<prices.length; i++){
		for(let j=i+1; j<prices.length; j++){
			if(prices[i]>=prices[j]){
				prices[i]=(prices[i]-prices[j]);
				break;
			}
		}
	}
	return prices;
};
console.log(finalPrices([10,1,1,6]));


// var finalPrices = function(prices) {
// 	var arr = []
// 	for (let i=0; i<prices.length; i++){
// 		var count = 0
// 		for(let j=i+1; j<prices.length; j++){
// 			if(prices[i]>=prices[j]){
// 				arr.push(prices[i]-prices[j]);
// 				count++;
// 				break;
// 			}
// 		}
// 		if(count==0){
// 			arr.push(prices[i]);
// 		}
// 	}
// 	return arr
// };
// console.log(finalPrices([10,1,1,6]));