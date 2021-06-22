let course1={
	number:"CS490",
	grades: 90
}

// this function prints all the keys that exist in the objects
function keys(course1){
	var arr = []
	for (i in course1){
		arr.push(i)
	}
	return arr
}
console.log(keys(course1))

// this function prints all the values that exist in the objects
function values(course1){
	var arr = []
	for (i in course1){
		arr.push(course1[i])
	}
	return arr
}
console.log(values(course1))