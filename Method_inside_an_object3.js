var course1 = {
	name: "CS120",
	grade: "C" 
}
var course2 = {
	name: "CS490",
	grade: "A"
}
var course3 = {
	name: "CS491",
	grade: "B+" 
}
var course4 = {
	name: "IT120",
	grade: "B"
}
var course5 = {
	name: "CS435",
	grade: "C+"
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
			switch(this.course[i].grade){ 
				case "A":
					count = count + 4;
					break; 
				case "B+":
					count = count + 3.5;
					break; 
				case "B":
					count = count + 3;
					break; 
				case "C+":
					count = count + 2.5;
					break; 
				case "C":
					count = count + 2;
					break; 
			}
		}
		return count/this.course.length
	}
}
console.log(student.average())