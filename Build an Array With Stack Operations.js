var buildArray = function(target, n) {
	var operationName = [];
	var operation = [];
	var count = 0;
	for (let i=0; i<n; i++){
		if(target[count]==i+1){
			operationName.push("Push");
			operation.push(i+1);
			count++;
		}
		else{
			operation.push(i);
			operationName.push("Push");
			operation.pop(i);
			operationName.push("Pop");
		}
		if(operation.length==target.length){
			break;
		}
	}
	return operationName;
};
console.log(buildArray([2,3,4], 4));