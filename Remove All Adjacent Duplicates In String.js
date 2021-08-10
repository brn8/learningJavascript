var removeDuplicates = function(s) {
	var arr = [];
	arr.push(s[0]);
	for(let i=1; i<s.length; i++){
		var temp = arr[arr.length-1];
		if(temp==s[i]){
			arr.pop();
		}
		else{
			arr.push(s[i]);
		}
	}
	return arr.join("");
    
};
console.log(removeDuplicates("abbaca"));