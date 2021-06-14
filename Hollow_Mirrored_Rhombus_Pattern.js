/*Code that prints the following pattern
*****
 *   *
  *   *
   *   *
    *****/
 for (var i=0; i<5;i++){
 	if(i==0){
 		for (var j=0; j<5; j++){
 			process.stdout.write("*");
 		}
 	}
 	else if(i==4){
 		for (var j=0; j<i; j++){
 			process.stdout.write(" ");
 		}
 		for (var j=0; j<5; j++){
 			process.stdout.write("*");
 		}
 	}
 	else
 	{
 		for (var k=0; k<i; k++){
 			process.stdout.write(" ");
 		}
 		process.stdout.write("*");
 		for (var l=0; l<3; l++){
 			process.stdout.write(" ");
 		}
 		process.stdout.write("*");
 	}
 		console.log("");
 	}

 
