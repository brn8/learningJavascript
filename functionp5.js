// This is an example of parameterized function since there are two parameter initialized inside the function. 
//this function takes two parameters and later it does the addition of two numbers 
function addition(a,b){//header
 	return a + b //body
 }
//this function takes two parameters and later it does the substraction of two numbers 
 function subtraction(a,b){//header
 	return a - b //body
 }
 //this function takes two parameters and later it does the multiplication of two numbers 
 function multiplication(a,b){//header
 	return a * b //body
 }
 //this function takes two parameters and later it does the division of two numbers 
 function division(a,b){//header
 	return a / b //body
 }

a=20 //value is being stored 
b=5 //value is being stored 

//Inside the print statement the function is being called 
console.log("Addition of two numbers is " + addition(a,b)); 
console.log("Subtraction of two numbers is " + subtraction(a,b));
console.log("Multiplication of two numbers is " + multiplication(a,b));
console.log("Division of two numbers is " + division(a,b));

/*What the program does is whenever the function is being called that operation is being
performed and in this case, it performs addition, subtraction, multiplication and division.*/