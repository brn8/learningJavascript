var restoreString = function(s, indices) {
	var string = [];
	for(let i=0; i<indices.length; i++){
		string[indices[i]]=s[i];
	}
	return string.join("")
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));