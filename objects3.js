/*What is the difference between === and ==?
--> === checks of type and it's value 
while == sign checks for it's value only */
// if(1===true){
// 	console.log("Hello world")
// }
//-----------------------------------------------------------------

let player1={ //handler or we can say objects
	//inside objects/handler we have different properties/attributes with it's value 
	name: "Rohit",
	age: 35,
	height: 6,
	runs: 15000,
	wicket: 50,

}
let player2={
	name: "Kohli",
	age: 38,
	height: 6,
	runs: 12000,
	wicket: 10,

}

let player3={
	name: "Rahane",
	age: 30,
	height: 5,
	runs: 11000,
	wicket: 40,

}
let player4={
	name: "Pant",
	age: 25,
	height: 6,
	runs: 6000,
	wicket: 0,

}

var players = [player1,player2,player3,player4]
console.log(players)

/*what this program does is it stores all the handlers inside an array*/

//-------------------------------------------------------------
/*FOR MY LEARNING
Find the highest runs scorer from the list of players*/
