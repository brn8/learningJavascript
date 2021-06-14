// This is an example of parameterized function since there are four parameter initialized inside the function. 

/*Suppose you have four parameters but you only have 3 parameters
 while calling the function than the last parameter will be defined as undefined.*/
function namesOfPeople(n1,n2,n3,n4){//Header 
	return n1+" "+n2+" "+n3+" "+n4  //Body
}
console.log(namesOfPeople("Dipambhai", "Jaybhai","Amrishbhai"));//function is being called
//in this case it will print Dipambhai Jaybhai Amrishbhai undefined


//-------------------------------------------------------------------------------------------------------------------------


/*While in this case, it takes only four parameters but you have 5 parameters
 while calling the function than it will only take first four parameter and it will disregard the last parameter. */
function namesOfPeople(n1,n2,n3,n4){//Header 
	return n1+" "+n2+" "+n3+" "+n4  //Body
}
console.log(namesOfPeople("Dipambhai", "Jaybhai","Amrishbhai", "Meetbhai","Jeetbhai"));//function is being called
//while in this case it will print Dipambhai Jaybhai Amrishbhai Meetbhai

