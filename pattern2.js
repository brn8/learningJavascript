//Code that prints the following pattern
//*******
// *****
//  ***
//   *

console.log("Pattern 2:")
for(var i=7; i>0; i--){
	if(i%2){
		if(i<7){
			var leftover=(7-i)/2;
			for(var k=0; k<leftover; k++){
				process.stdout.write(" ");
		}
	}
		for(var j=0; j<i; j++){
			process.stdout.write("*");
		}
	console.log("");
}
	
}