// This is an example of parameterized function since there is one parameter initialized inside the function. 
//this function converts temperature from celsius to fahrenheit 
function celsiusToFahrenheit(celsius){//header
	return (celsius * (9 / 5)) + 32;//body 
}
temperature = 80 //stores the value
console.log("Today's temperature is " + temperature + " degree celsius.") //print the values
console.log("Today's temperature is " + celsiusToFahrenheit(temperature) + " degree fahrenheit.") //This is when the function is being called 

/*What this program does is whenever the function is being called
it will convert the temperature value from celsius to fahrenheit. */