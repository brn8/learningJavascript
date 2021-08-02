//sum
function f1(num1,num2){
	var sum = num1 + num2;
	// console.log(sum);
	return sum
}
var r1 = f1(10,11); //function call is an expression
var r2= f1(20,21);
var r3 = f1(3,7);

// console.log(r1);
// console.log(r2);
// console.log(r3);
//---------------------------------------------------------
//multiplication 

function f2(num1, num2){
	var multiplication = num1*num2;
	return multiplication; 
} 
var m1 = f2(10,5);
console.log(m1);

//----------------------------------------------------------
//Division

function f3(num1,num2){
	var division = num1/num2;
	return division;
}
var d1 = f3(15,3);
console.log(d1);

//----------------------------------------------------------
//Subtraction

var m = 0;
function f4(num1,num2){
	if(num1==undefined){
		num1=1;
	}
	if(num2==undefined){
		num2=m;
	}
	var Subtraction = num1-num2;
	m=Subtraction;
	return Subtraction;
}
var s1= f4();
var s2= f4();
console.log(s1);
console.log(s2);


