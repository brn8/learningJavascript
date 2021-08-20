var removeDuplicates = function(s, k) {
	var arr = [];
	for (let i=0; i<s.length; i++){
		arr.push(s[i]);
		var temp = arr[arr.length-1];
		var count = 0;
		for(let i=arr.length-1; i>=0; i--){
			if(temp==arr[i]){
				count++;
			}
			else{
				break;
			}
			if(count==k){
				for (let i=0; i<k; i++){
					arr.pop();
				}
			}
		}
	}
	return arr.join("")
};
console.log(removeDuplicates("deeedbbcccbdaa",3));