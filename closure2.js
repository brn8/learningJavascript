//calculating student grade

function studentGrades(name){
	var grade = 0;
	var average = 0;
	var count = 0
	function printStudentgrade(){
		console.log("Name:"+name, "current grade:"+averageGrade())
	}
	function currentGrade(grades){
		grade+=grades;
		count++;

	}
	function averageGrade(){
		if(count>0){
		average=(average+grade)/count;
		}
		else{
			average+=grade;
		}
		return average
	}
	return {
		grades: currentGrade,
		printReportCart: printStudentgrade,

	}
}

var student = studentGrades("Brijesh")
student.grades(10)
student.grades(80)
student.printReportCart()

