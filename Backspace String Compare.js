var finalString = function (string){
	var arr = [];
	for(let i=0; i<string.length; i++){
		if(string[i]=="#"){
			arr.pop();
		}
		else{
			arr.push(string[i]);
		}
	}
	return arr.join("");
}
var backspaceCompare = function(s, t) {
	var sString = finalString(s);
	var tString = finalString(t);
	return (sString==tString)?true:false;
};
console.log(backspaceCompare("ab#c","ad#c"));


// var backspaceCompare = function(s, t) {
//  var arrS= [];
// 	var arrT = [];
// 	for(let i=0; i<s.length; i++){
// 		if(s[i]=="#"){
// 			arrS.pop();
// 		}
// 		else{
// 			arrS.push(s[i]);
// 		}
// 	}
// 	for(let i=0; i<t.length; i++){
// 		if(t[i]=="#"){
// 			arrT.pop();
// 		}
// 		else{
// 			arrT.push(t[i]);
// 		}
// 	}
// 	return (arrS.join("")==arrT.join(""))?true:false;
// };