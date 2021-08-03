
function main(){
	var i=0; 
	
	main.f1=function(){
		i++;
		console.log(i);
	}
	main.f2=function(){
		i--;
		console.log(i);
	}
}
main();

var a = main.f1;
a();