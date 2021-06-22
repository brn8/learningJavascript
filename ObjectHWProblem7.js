
var course1 = {
	name: "CS120",
	grade: 90 
}
var course2 = {
	name: "CS490",
	grade: 80 
}
var course3 = {
	name: "CS491",
	grade: 95 
}
var course4 = {
	name: "IT120",
	grade: 98
}
var course5 = {
	name: "CS435",
	grade: 100
}

var listOfcourses = [course1,course2,course3,course4,course5];
//console.log(listOfcourses)

let student = {
	name: "Brijesh",
	id: 16251,
	course: listOfcourses
}

function highestGrade (student){
	var x = student.course
	var max = x[0].grade;
	var name = ""
	for (var i=0; i<x.length; i++){
		if(x[i].grade > max ){
			name=x[i].name
		}
	}
	return name

}
console.log(highestGrade(student))