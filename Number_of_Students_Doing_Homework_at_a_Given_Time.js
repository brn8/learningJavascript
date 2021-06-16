var busyStudent = function(startTime, endTime, queryTime) {
	var count = 0 
	for (var i=0; i<startTime.length; i++){
		for (var j=startTime[i]; j<=endTime[i]; j++){
			if(j==queryTime){
				count++
			}

		}
		
	}
	return count
    
};
console.log(busyStudent([4],[4],4))