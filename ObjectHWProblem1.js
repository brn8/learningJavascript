//function should return list of keys and list of values
let student = {
	name: "Brijesh",
	friends_height: [5,4,6,7],
}

function listAllkeys(student){
	var arr = []
	for (keys in student){
		arr.push(keys)
	}
	return arr
}
console.log(listAllkeys(student))

function listAllvalues(student){
	var arr = []
	for (values in student){
		arr.push(student[values])
	}
	return arr
}
console.log(listAllvalues(student))