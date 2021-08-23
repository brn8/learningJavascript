var maximumGain = function(s, x, y) {
	var ba = [];
	var ab = [];
	var count = 0;
	ba.push(s[0]);
	for(let i=1; i<s.length; i++){
		if(s[i]==((y>x)?"a":"b") && ba[ba.length-1]==((y>x)?"b":"a")){
			ba.pop();
			count = count + ((y>x)?y:x);
		}
		else{
			ba.push(s[i]);
		}
	}
	ab.push(ba[0]);
	console.log(ba)
	for(let j=1; j<ba.length; j++){
		if(ba[j]==((y>x)?"b":"a") && ab[ab.length-1]==((y>x)?"a":"b")){
			ab.pop();
			count = count + ((y>x)?x:y);

		}
		else{
			ab.push(ba[j]);
		}
	}
	return count
};
console.log(maximumGain("cdbcbbaaabab", 4,5))