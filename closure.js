//closur: function inside of another function 
//Make a closure for cricker players stats
// add runs, wickets, boundaries 

function crickerStat(name){
	function strikeRate(runs, balls){
		return runs/balls*100;
	}
	function printStats(runs, balls){
		console.log("Name:"+name,"Runs:"+runs,"Balls:"+balls, "strikeRate:"+strikeRate(runs, balls))
	}
	return printStats
}
var stats = crickerStat("Rohit");
stats(50,15)

stats = crickerStat("Kohli");
stats(52,16)


