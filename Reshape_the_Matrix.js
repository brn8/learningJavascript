var matrixReshape = function(mat, r, c) {
	var temp_arr = []
	var arr = []
	var count = 0
	for(let i=0; i<mat.length; i++){
		for(let j=0; j<mat[i].length; j++){
			temp_arr.push(mat[i][j])
		}
	}
	if((r*c)==temp_arr.length){
		for(let i=0; i<r; i++){
			var x = []
			for (let j=0; j<c; j++){
				x.push(temp_arr[count]);
				count++;
			}
			arr.push(x)
		}
	} else {
		return mat
	}
	return arr
	

};
console.log(matrixReshape([[1,2],[3,4]], 2, 4));