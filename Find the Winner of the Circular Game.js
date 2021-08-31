var findTheWinner = function(n, k) {
	var arr = []
	for (let i=1; i<=n; i++){
		arr.push(i);
	}
	var count = 1;
	while(true){
        if(arr.length==1){
			break;
		}
		for (let i=0; i<arr.length; i++){
			if(count==k){
				arr.shift();
				count=1;
				break;
			}
			else {
				arr.push(arr.shift());
				count++;
			}
		}
	}
	return arr[0];
};
console.log(findTheWinner(6,5));