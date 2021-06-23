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
	grade: 99 
}
var course4 = {
	name: "IT120",
	grade: 98
}
var course5 = {
	name: "CS435",
	grade: 10
}

var listOfcourses = [course1,course2,course3,course4,course5];
//console.log(listOfcourses)

let student = {
	name: "Brijesh",
	id: 16251,
	course: listOfcourses,
	average(){
		var count = 0; 
		for (var i = 0; i<this.course.length; i++){
			count = count+ this.course[i].grade
		}
		return count/this.course.length
	}
}
console.log(student.average())