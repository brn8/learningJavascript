var dailyTemperatures = function(temperatures){
	for (let i=0; i<temperatures.length; i++){
		let index = i;
		for(let j=i+1; j<temperatures.length; j++){
			if(temperatures[i]<temperatures[j]){
				index=j;
				break;
			}
		}
		if(i==index){
			temperatures[i]=0;
		}
		else{
			temperatures[i]=(index-i);
		}
	}
	return temperatures
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));