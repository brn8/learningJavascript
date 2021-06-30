function evenNumber(num){
	if(num==0){
		return 
	}
	if(num%2!=0){
		num--
	}
	console.log(num)
	evenNumber(num-2);
}
evenNumber(28)
//------------------------------------------------
function oddNumber(num){
	if(num==-1){
		return
	}
	if(num%2==0){
		num--
	}
	console.log(num);
	oddNumber(num-2)
}
oddNumber(28)

