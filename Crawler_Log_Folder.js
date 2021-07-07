var minOperations = function(logs) {
	var arr = []
	for(let i=0; i<logs.length; i++){
		if(logs[i]=="./"){
		}
		else if(logs[i]=="../"){
			arr.pop()
		}
		else{
			arr.push(logs[i])
		}
	}
	return arr.length
};	

console.log(minOperations(["./","wz4/","../","mj2/","../","../","ik0/","il7/"]))

// var minOperations = function(logs) {
//     var count = 0;
// 	for(let i=0; i<logs.length; i++){
// 		if(count<0){
// 			count=0
// 		}
// 		if(logs[i]=="./"){
// 			count=count+0
// 		}
// 		else if(logs[i]=="../"){
// 			count=count-1;
// 		}
// 		else{
// 			count++;
// 		}
// 	}
// 	if(count<0){
// 		return 0
// 	}
// 	else{
// 		return count;
// 	}
// };

// console.log(minOperations(["./","wz4/","../","mj2/","../","../","ik0/","il7/"]))