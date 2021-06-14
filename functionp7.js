//In this program, function call inside function
function celsiusToFahrenheit(celsius){//header
	return (celsius *(9 / 5) + 32); //body

}

function display(){//header
	temperature = 80 //stores the value
	console.log("Today's temperature is " + temperature + " degree celsius.") //print the values
	console.log("Today's temperature is " + celsiusToFahrenheit(temperature) + " degree fahrenheit.") //This is when the second function is being called 
}
display() //this is when the function is being called 

/*What this program does is it calls the function and inside the function another function is being called 
For example: Firstly, function display is being called and inside that function,
another function is being called which converts the temperature from celsius to Fahrenheit*/


