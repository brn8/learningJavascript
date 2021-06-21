let student = { //handler or we can say objects
	//inside objects/handler we have different properties/attributes and it's value 
	"name": "Brijesh",
	phone: "201-758-6942", 
	email: "brn8@njit.edu",
	college: "New Jersey Institute of Technology",
	degree: "Bachelor's degree",
	"birth date": "1-27-1999",
	spec: true,
	car: ["Tesla","BMW","KIA"] // array are used to store multiple things and in this case, we are storing list of car brands 
}

student.car.push("Camry","Jeep") //using push method to add cars brand into an array 
console.log(student)

//using in operator to check if the properties/attributes exists 
console.log("car" in student)


//using keys method of an object to list all the keys/properties of an object
console.log(Object.keys(student))


//using values method of an object to list all the values of an object
console.log(Object.values(student))