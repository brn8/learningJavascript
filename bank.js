var balance = 0;
var lt = 0;
function deposit(value){
	balance=balance+value
	lt=value
}

function withdraw(value){
	if(balance>value){
		balance=balance-value;
		lt=value*-1
	}
}

function statement(){
	console.log("Current balance:",balance);
	console.log("Last transaction:",lt);
}
deposit(150);
deposit(150);
deposit(150);
withdraw(100);
statement();
console.log(deposit.count)
