let courses={
	names:"Operating System",
	professor: "Tanvir",
	grades:"A" 
}
let courses1={
	names:"CS491",
	professor: "Nassami",
	grades:"B" 
}
let courses2={
	names:"IT202",
	professor: "Deepakbal",
	grades:"A" 
}

let courses3={
	names:"CS490",
	professor: "Srest",
	grades:"A" 
}
let courses4={
	names:"CS280",
	professor: "Ryan",
	grades:"B" 
}

var x = [courses,courses1,courses2,courses3,courses4]
let student = { //handler or we can say objects
	//inside objects/handler we have different properties/attributes and it's value 
	"name": "Brijesh",
	phone: "201-758-6942", 
	email: "brn8@njit.edu",
	college: "New Jersey Institute of Technology",
	degree: "Bachelor's degree",
	"birth date": "1-27-1999",
	spec: true,
	car: ["Tesla","BMW","KIA"],// array are used to store multiple things and in this case, we are storing list of car brands 
	courses: x
}

console.log(student)

/*What is new about this program is that, 
inside student object we have differnt keys and some keys tend to hold an string, 
number, boolean, and a variable. In this case, I used x as a variable to 
store all other objects.  */
