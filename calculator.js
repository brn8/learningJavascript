function number7(){
    let number7 = document.getElementById("number7").innerHTML;
    document.getElementById("input").innerHTML+=number7;
}

function number8(){
    let number8 = document.getElementById("number8").innerHTML;
    document.getElementById("input").innerHTML+=number8;
}

function number9(){
    let number9 = document.getElementById("number9").innerHTML;
    document.getElementById("input").innerHTML+=number9;
}

function number4(){
    let number4 = document.getElementById("number4").innerHTML;
    document.getElementById("input").innerHTML+=number4;
}

function number5(){
    let number5 = document.getElementById("number5").innerHTML;
    document.getElementById("input").innerHTML+=number5;
}

function number6(){
    let number6 = document.getElementById("number6").innerHTML;
    document.getElementById("input").innerHTML+=number6;
}

function number1(){
    let number1 = document.getElementById("number1").innerHTML;
    document.getElementById("input").innerHTML+=number1;
}

function number2(){
    let number2 = document.getElementById("number2").innerHTML;
    document.getElementById("input").innerHTML+=number2;
}

function number3(){
    let number3 = document.getElementById("number3").innerHTML;
    document.getElementById("input").innerHTML+=number3;
}

function number0(){
    let number0 = document.getElementById("number0").innerHTML;
    document.getElementById("input").innerHTML+=number0;
}

function dot(){
    let dot = document.getElementById("dot").innerHTML;
    document.getElementById("input").innerHTML+=dot;
}

//operation
function division(){
    let division = document.getElementById("division").innerHTML;
    document.getElementById("input").innerHTML+=division;
}
function multiplication(){
    let multiplication = document.getElementById("multiplication").innerHTML;
    document.getElementById("input").innerHTML+=multiplication;
}

function subtraction(){
    let subtraction = document.getElementById("subtraction").innerHTML;
    document.getElementById("input").innerHTML+=subtraction;
}

function addition(){
    let addition = document.getElementById("addition").innerHTML;
    document.getElementById("input").innerHTML+=addition;
}

function equal(){
    let input = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML=eval(input);
}
function clears(){
    document.getElementById("input").innerHTML="";
}