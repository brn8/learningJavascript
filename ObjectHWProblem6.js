//This program will calculate the strike rate
var run = [10,25,50]
var ball = [5,8,30]
var strike_rate = []

for (var i=0; i<run.length; i++){
	strike_rate.push((run[i]/ball[i])*100);
}

console.log(strike_rate)