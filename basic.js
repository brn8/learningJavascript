//console.log("Hello World!");

// function readString(){
// 	a = "Hello World"
// 	return a
// }

// console.log(readString());

// function myName(name){
// 	a = "My name is " + name
// 	return a
// }

// console.log(myName("Brijesh"));

// function multipleOfNumber(number){
// 	return number**3
// }
// console.log(multipleOfNumber(5));
// x=multipleOfNumber(10);
// console.log(x);

function celsiusToFahrenheit(celsius){
	return (celsius * (9 / 5)) + 32;
}
// temperature = 80
// console.log("Today's temperature is " + temperature + " degree celsius.")
// console.log("Today's temperature is " + celsiusToFahrenheit(temperature) + " degree fahrenheit.")
 
 // function addition(a,b){
 // 	return a + b
 // }

 // function subtraction(a,b){
 // 	return a - b
 // }
 // function multiplication(a,b){
 // 	return a * b
 // }
 // function division(a,b){
 // 	return a / b
 // }

// a=20
// b=5
// console.log("Addition of two numbers is " + addition(a,b));
// console.log("Subtraction of two numbers is " + subtraction(a,b));
// console.log("Multiplication of two numbers is " + multiplication(a,b));
// console.log("Division of two numbers is " + division(a,b));

/*
function namesOfPeople(n1,n2,n3,n4){//Header 
	return n1+" "+n2+" "+n3+" "+n4  //Body
}
console.log(namesOfPeople("Dipambhai", "Jaybhai","Amrishbhai", "Meetbhai"));//calling a function


Suppose you have four parameters but you only have 3 parameters
 while calling the function than the last parameter will be defined as undefined.
 On other side, if you hace four parameters but you have 5 parameters
 while calling the function than it will only take 4 parameter and it will disregard the last parameter. 
*/

// function display(){
// 	temperature = 80
// 	console.log("Today's temperature is " + temperature + " degree celsius.")
// 	console.log("Today's temperature is " + celsiusToFahrenheit(temperature) + " degree fahrenheit.")

// }
// display()

//Function inside Function

/* In a child function, you can you a parents's variable*/
// function Calculator(c1, c2){
// 	function addition(){
// 		return c1 + c2
// 	}
// 	function subtraction(){
// 		return c1 - c2
// 	}
// 	function multiplication(){
//  		return c1 * c2
//  	}
//  	function division(){
//  		return  c1 / c2
//  	}
//  	return "Addition: "+addition()+" Subtraction: "+subtraction()+" Multiplication: "+multiplication()+" Division: "+division()
// }
// console.log(Calculator(10,5));

/*function returns another function*/
// function displayTwo(){
// 	function displayOne(){
// 	return "Hello"
// }
// 	return displayOne()
// }
// console.log(displayTwo());



