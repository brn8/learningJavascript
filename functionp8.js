/*This program is an example of Inheritance because inside parent function you can create child function
and we call that nested functions.   
Also in a child function, you can use a parent's variable*/

function Calculator(c1, c2){//header
	function addition(){
		return c1 + c2
	}
	function subtraction(){
		return c1 - c2
	}
	function multiplication(){
 		return c1 * c2
 	}
 	function division(){
 		return  c1 / c2 
 	}
 	return "Addition: "+addition()+" Subtraction: "+subtraction()+" Multiplication: "+multiplication()+" Division: "+division() // this is when all of the child function is being called 
}
console.log(Calculator(10,5)); //parent function is being called

/*what the program does is it calls the parent function and inside the parents function, it calls many 
child function.*/


//---------------------------------------------------------------------------------------------------

/*function returns another function*/
function displayTwo(){
	function displayOne(){
	return "Hello"
}
	return displayOne()
}
console.log(displayTwo());


