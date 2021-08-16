var getConcatenation = function(nums) {
	var arr = [];
	for (let i=0; i<2; i++){
		arr.push(...nums);
	}
	return arr

};
console.log(getConcatenation([1,2,1]));