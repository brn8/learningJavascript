//Code that prints the following pattern
//*
//* *
//* * *
//* * * *
//* * * * *
console.log("Pattern 1:")
for(var i=0; i<5; i++){
	for(var j=0; j<i+1; j++){
		process.stdout.write("*")
	}
	console.log("")
}