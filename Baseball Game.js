var calPoints = function(ops){
	var arr = [];
	for (let i=0; i<ops.length; i++){
		if(ops[i]=="C"){
			arr.pop();
		}
		else if(ops[i]=="D"){
			arr.push(arr[arr.length-1]*2);
		}
		else if(ops[i]=="+"){
			arr.push(arr[arr.length-2]+arr[arr.length-1]);
		}
		else {
			arr.push(parseInt(ops[i]));
		}
	}
	return arr.reduce((pv, cv) => pv + cv, 0);
    
};
console.log(calPoints(["5","2","C","D","+"]));