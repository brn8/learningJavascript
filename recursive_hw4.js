/*Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".


changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p"
*/
var str = ''
function changePi(string){
	if(string.length==1){
		str = str.concat(string[0])
		return str
	}
	if(string.length==0){
		return str
	}
	if(string[0]+string[1]=="pi"){
		str = str.concat(3.14)
		return changePi(string.substr(2,string.length))
	}
	else{
		str = str.concat(string[0])
		return changePi(string.substr(1,string.length))
	}
}
console.log(changePi("xpipixp"))