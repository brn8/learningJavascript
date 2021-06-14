/*Code that prints the following pattern
*****
*   *
*   *
*   *
*****/
for (var i=0; i<5; i++){
	if(i==0||i==4){
		for (var j=0; j<5; j++){
			process.stdout.write("*")
		}
		console.log("");
	}
	else
	{
		process.stdout.write("*")
		for (var k=0; k<3; k++){
			process.stdout.write(" ");
		}
		process.stdout.write("*");
		console.log("");
	}
}

