let course1={
	number:"CS490",
	grades: 90
}
let course2={
	number:"CS491",
	grades: 80
}
let course3={
	number:"CS435",
	grades: 70
}
let course4={
	number:"IT420",
	grades: 95
}
let course5={
	number:"CS100",
	grades: 87
}

var allCourses = [course1, course2, course3, course4, course5];

let student = {
	id: 90,
	name: "Brijesh",
	courses: allCourses,
}
console.log(student);

function checksForHighestGrades(student){
	var arr = student.courses;
	var name = "";
	for(var i=1; i<arr.length; i++){
		if (arr[i-1].grades<arr[i].grades){
			name=arr[i].number
		}
	}
	return name

};
console.log(checksForHighestGrades(student))

/*What this program does is, it prints the name of the course
in which you have received an higest grade */