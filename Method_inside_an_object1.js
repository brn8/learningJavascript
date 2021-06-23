//learn to use ${this.key} to print the current value of that key
let student = {
	name: "Brijesh",
	diplay(string){ //mothod of object 
		console.log("Hello World " + string+ ` ${this.name}`)
	}
}
student.diplay("I am")

