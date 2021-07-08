var numSpecial = function(mat) {
	var temp = []
	var new_temp=[]
	var output_count = 0
	var out = 0
	for(let i=0; i<mat.length; i++){
		let count = 0
		let value = 0
		for(let j=0;j<mat[i].length; j++){
			if(mat[i][j]==1){
				count++
				value=j
			}
		}
		if(count<2 & count != 0){
			temp.push(value)
		}
	}
	for(let i=0; i<mat[0].length; i++){
		let counts = 0;
		for(let j=0; j<mat.length; j++){
			if(mat[j][i]==1){
				counts++
			}
		}
		if(counts>1){
			new_temp.push(i)
		}
	}
	if(new_temp.length==0){
		return temp.length-output_count
	}
	else{
		for(let i=0; i<temp.length; i++){
			for(let j=0; j<new_temp.length; j++){
				if(temp[i]==new_temp[j]){
					output_count++
				}
			}
		}
	}
	return temp.length-output_count
};
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]]))