// var arr = [10,20,30,40,50]	
// console.log(arr)
// arr[5]=60
// console.log(arr)


//var newArr = [10,20,30,40,50]
// console.log(newArr[0])
// console.log(newArr[1])
// console.log(newArr[2])
// console.log(newArr[3])
// console.log(newArr[4])

// for (var i=1; i<=10; i++){
// 	console.log(i);
// }

// for (var i=0; i<newArr.length; i++){
// 	console.log(newArr[i]);
// }


// var x = []
// for (var i=0; i<newArr.length; i++){
// 	x[i]=newArr[i]//assigning operation 
// }
// console.log(x)

// var arr = ["Rohit", "Dhoni", "Dhawan","ABD","Virat"]

function cricketerNames(names,specificName){
for( var i=0; i<names.length; i++){
	if(names[i]==specificName){
		names[i]="Steven";
	}
}
return names
}
console.log(cricketerNames(["Rohit", "Dhoni", "Dhawan","ABD","Virat"],"ABD"))


