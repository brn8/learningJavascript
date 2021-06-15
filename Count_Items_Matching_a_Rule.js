var countMatches = function(items, ruleKey, ruleValue) {
	var count = 0;
	for (var i=0; i<items.length; i++){
		var type = 0;
		var color = 1;
		var name = 2;
		if (ruleKey=="color"){
			if(items[i][color]==ruleValue){
				count=count+1
			}
		}
		else if (ruleKey=="type"){
			if(items[i][type]==ruleValue){
				count=count+1
			}
		}
		else {
			if(items[i][name]==ruleValue){
				count=count+1
		}

		}
	}
	return count
};
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"))