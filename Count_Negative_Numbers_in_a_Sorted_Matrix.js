//This program will counts all the negative numbers in a sorted matrix
var countNegatives = function(grid) {
	var count =0
	for (var i=0; i<grid.length; i++){
		for (var j=0; j<grid[i].length; j++){
			if (grid[i][j]<0){ 
				count=count+1
			}
		}
	}
	return count
    
};
console.log(countNegatives([[5,1,0],[-5,-5,-5]]))