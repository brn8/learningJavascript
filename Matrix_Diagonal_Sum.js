//Leetcoode# 1572
var diagonalSum = function(mat) {
	var j = mat.length-1;
	var k = j/2;
	var count = 0
    for (var i=0; i<mat.length; i++){
    	count=count+mat[i][i];
    	count=count+mat[i][j];
    	j--;
    }
    if(mat.length%2){
    	count = count - mat[k][k]
    }
    return count
};
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))
