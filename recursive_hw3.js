/*Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.


countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0
*/
function countX(string){
	if(string.length==0){
		return 0
	}
	length = string.length-1;
	if(string[length]=="x"){
		return 1+ countX(string.substr(0,length))
	}
	
	return 0+ countX(string.substr(0,length))
}
console.log(countX("xxhixx"))


