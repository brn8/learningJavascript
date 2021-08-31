var firstUniqChar = function(s) {
	var arr = [];
	for(let i=0; i<s.length; i++){
		arr.push(s[i]);
	}
    if(s.length == 1){
        return 0
    }
	var index = 0;
	var totalLoop = 0;
	while(true){
		totalLoop++;
		if(totalLoop>s.length){
			return -1;
		}
		var count = 0;
		for(let i=1; i<arr.length; i++){
			if(arr[0]==arr[i]){
				arr.push(arr.shift());
				count++;
				index++;
				break;
			}
		}
		if(count==0){
			return index;
		}
	}
};
console.log(firstUniqChar("loveleetcode"));