//Code that prints the following pattern
//*****
// ****
//  ***
//   **
//    *

for (var i=0; i<5; i++){
	for(var j=0; j<i;j++){
		process.stdout.write(" ");
	}
	for(var k=0; k<5-i; k++){
		process.stdout.write("*");
	}
	console.log("");
}
