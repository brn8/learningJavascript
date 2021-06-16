function swap(num){
	for (var i=0; i<num.length-1; i+=3){
		for (var j=i+2; j<i+3; j++){
			var temp = num[i]
			num[i]=num[j]
			num[j]=temp
		}
	}
	console.log(num)
}
swap([10,20,30,25,112,3,21,7,4,99])