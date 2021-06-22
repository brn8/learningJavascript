//create three function that takes student as a parament and print min, max and average. 
let student = {
	name: "Brijesh",
	friends_height: [5,4,6,7],

}

function minHeight(student){
	var arr =student.friends_height;
	var min = arr[0]
	for (var i=0; i<arr.length; i++){
		if (arr[i]<=min){
			min=arr[i]
		}
	}
	return min

}
console.log(minHeight(student))

function maxHeight(student){
	var arr = student.friends_height
	var max = arr[0]
	for (var i=0; i<arr.length; i++){
		if(arr[i]>=max){
			max=arr[i]
		}
	} 
	return max

}
console.log(maxHeight(student))

function averageHeight(student){
	var arr = student.friends_height
	var sum = 0
	for (var i=0;i<arr.length; i++){
		sum = sum + arr[i]
	}
	return sum/(arr.length)

}
console.log(averageHeight(student))