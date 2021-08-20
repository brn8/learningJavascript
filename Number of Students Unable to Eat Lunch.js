var countStudents = function(students, sandwiches){
	while (true){
		var length = students.length;
		for (let i=0; i<students.length; i++){
			if(students[0]==sandwiches[0]){
				students.shift();
				sandwiches.shift();
			}
			else{
				students.push(students.shift());
			}
		}
		if(students.length==length){
			break;
		}	
	}
	return students.length;
};
console.log(countStudents([1,1,0,0],[0,1,0,1]));


// var countStudents = function(students, sandwiches) {
//     for (let i=0; i<280; i++){
// 		var stTemp = students[0];
// 		var saTemp = sandwiches[0];
// 		if(stTemp==saTemp){
// 			students.shift();
// 			sandwiches.shift();
// 		}
// 		else{
// 			for (let i=0; i<students.length-1; i++){
// 				var temp = students[i];
// 				students[i]=students[i+1];
// 				students[i+1]=temp;
// 			}
// 		}
// 	}
// 	return students.length
// };
// console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));