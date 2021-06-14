/*Code that prints the following pattern
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    */
function pattern(num,star){
	function dimondPattern(){
		for (var i=0; i<=num; i++){
			if(i%2){
				var leftover = (num-i)/2;
 				for (var j=0; j<leftover; j++){
 					process.stdout.write(" ");
 				}
 				for (var k=0; k<i; k++){
 					process.stdout.write(star);
 				}
 			console.log("");
 	}

 }
 
 		for (var l=num-2; l>=0; l--){
 			if(l%2){
 				var leftovers = (num-l)/2;
 				for (var m=0; m<leftovers; m++){
 					process.stdout.write(" ");
 				}
 				for (var n=0; n<l; n++){
 					process.stdout.write(star);
 				}
 			console.log("");
 		
 	}
 }
}
 return dimondPattern();
}
pattern(100,"*");