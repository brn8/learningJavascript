// function is just an value 
// function hello_generate(){
// 	var h = function(){
// 		console.log("Hello World")
// 	}
// 	return h
// }
// var b = hello_generate()
// b()

function arr_sum(a){
	var sum= 0
	var arr=[]
	for (var i=0; i<a.length;i++){
		sum= sum+a[i]
		arr[i]=sum
	}
	console.log(arr);
}
arr_sum([0,10,15,20])


// function checkForNumber(a){
// 	for (var i=0; i<a.length;i++){
// 		if(typeof a[i] == 'number'){
// 			console.log(a[i]);
// 		}
// 	}
// }
// checkForNumber([0,10,null,true])