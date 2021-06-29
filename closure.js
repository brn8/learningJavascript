//closur: function inside of another function 
//Make a closure for cricker players stats
// add runs, wickets, boundaries 

function crickerStat(name){
	let runs = 0;
	let balls = 0;
	
	function strikeRate(){
		return runs/balls*100;
	}
	
	function printStats(){
		console.log("Name:"+name,"Runs:"+runs,"Balls:"+balls, "strikeRate:"+strikeRate(runs, balls))
	}
	
	function addScore(run, ball) {
		runs += run
		balls += ball
	}

	return {
		printStats: printStats,
		addScore: addScore,
		strikeRate: strikeRate,
	}
}
var rohit = crickerStat("Rohit");
rohit.addScore(73, 100);
rohit.printStats();

// var kohli = crickerStat("Kohli");
// stats(52,16)


