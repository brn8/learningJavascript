var luckyNumbers  = function(matrix) {
	var arr = [];
	for (let i=0; i<matrix[0].length; i++){
		var largest = 0;
		var index = 0;
		for (let j=0; j<matrix.length; j++){
			if(largest<matrix[j][i]){
				largest=matrix[j][i];
				index=j;
			}
		}
		if(Math.min(...matrix[index])==largest){
			return [largest]
		}
	}
	return [];
};
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));

// var luckyNumbers  = function(matrix) {
// 	var arr = [];
// 	for (let i=0; i<matrix[0].length; i++){
// 		var largest = 0;
// 		for (let j=0; j<matrix.length; j++){
// 			if(largest<matrix[j][i]){
// 				largest=matrix[j][i];
// 			}
// 		}
// 		arr.push(largest);
// 	}
// 	for (let j=0; j<matrix.length; j++){
// 		for (let k=0; k<arr.length; k++){
// 			if(Math.min(...matrix[j])==arr[k]){
// 				return [arr[k]];
// 			}
// 		}
// 	}
// };
// console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));