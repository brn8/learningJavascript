var getConcatenation = function(nums) {
	var arr = [];
	arr.push(...nums);
	arr.push(...nums);
	return arr
	
};
console.log(getConcatenation([1,2,1]));