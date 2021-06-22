 //Used this example do the tracing
 let employees = {
 	id: 100,
 	name: "John"
 }
 console.log(employees)
 employees1 = employees

 let employees3 = {
 	id: 100,
 	name: "John"
 }

console.log(employees==employees1)
console.log(employees==employees3) // it's false since diffenent memory address 
employees1.name="Brijesh"
console.log(employees.name)