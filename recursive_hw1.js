
function bunnyEar(bunnies){
	if(bunnies==0){
		return 0
	}
	if(bunnies%2){
		return 2 + bunnyEar(bunnies-1)
	}else{
		return 3 + bunnyEar(bunnies-1)
	}

}
console.log(bunnyEar(5))