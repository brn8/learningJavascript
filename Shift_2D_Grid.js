var shiftGrid = function(grid, k) {
	for (let l=0; l<k; l++){
		var temp = grid[0][0];
		for (let i=0; i<grid.length; i++){
			for (let j=0; j<grid[i].length; j++){
				var t = grid[i][j];
				grid[i][j]=temp;
				temp=t
			}
		}
		grid[0][0]=temp
	}
	return grid
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 4))

// function shift(arr,k){
// 	for (let j=0; j<k; j++){
// 		var temp = arr[0]
// 		for (let i=1; i<arr.length; i++){
// 			var t = arr[i]
// 			arr[i]= temp;
// 			temp=t
// 		}
// 		arr[0]=temp
// 		console.log(arr)
// 	}
// }
// shift([1,10,15,6,5],3)

//123
