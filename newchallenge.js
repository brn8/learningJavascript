function combine(arr,arr1){
 	var a = []
 	for (let i=0; i<arr.length; i++){
 		a.push(arr[i])
 	}
 	for (let i=0; i<arr.length; i++){
 		a.push(arr1[i])
 	}
 	return a
 }
 var arr = [0,0,0,0]
 var arr1 = [1,1,1,1]
 console.log(combine(arr,arr1));
//----------------------------------------------------------
function combine1(arr,arr1){
 	var a = []
 	for (let i=0; i<arr.length; i++){
 		a.push(arr1[i])
 	}
 	for (let i=0; i<arr.length; i++){
 		a.push(arr[i])
 	}
 	return a
 }
 var arr = [0,0,0,0]
 var arr1 = [1,1,1,1]
 console.log(combine1(arr,arr1));
 //----------------------------------------------------------
function combine2(arr,arr1){
 	var a = []
 	for (let i=0; i<arr.length; i++){
 		a.push(arr[i])
 		a.push(arr1[i])
 	}
 	return a
 }
 var arr = [0,0,0,0]
 var arr1 = [1,1,1,1]
 console.log(combine2(arr,arr1));
//--------------------------------------------------------