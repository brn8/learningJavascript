var mergeTwoLists = function(l1, l2) {
	var arr = []
	var i = 0;
	var j = 0; 
	for(;i<l1.length && l2.length;){
		if(l1[i]<=l2[j]){
			arr.push(l1[i]);
			i++;
		}
		else{
			arr.push(l2[j]);
			j++;
		}
	}
	if(i<l1.length){
		for(let k=i; k<l1.length; k++){
			arr.push(l1[k])
		}
	}
	if(j<l2.length){
		for(let k=j; k<l2.length; k++){
			arr.push(l2[k])
		}
	}
	return arr
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))