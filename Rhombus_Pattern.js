/*Code that prints the following pattern
    *****
   *****
  *****
 *****
*****/
for (var i=0; i<5;i++){
	for( var j=i+1; j<5; j++){
		process.stdout.write(" ");
	}
	for (var k=0; k<5; k++){
		process.stdout.write("*");
	}
	console.log("")
}