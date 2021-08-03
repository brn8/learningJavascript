
function deposit(value){
	this.balance=this.balance+value
	this.lastTransaction=value
}

function withdraw(value){
	if(this.balance>value){
		this.balance=this.balance-value;
		this.lastTransaction=value*-1
	}
}

function statement(){
	console.log("Current balance:",this.balance);
	console.log("Last transaction:",this.lastTransaction);
}

var method = {
	deposit:deposit,
	withdraw: withdraw,
	statement:statement
}
function piggyBank(v){ 
	var obj = {};
	(v==undefined)?obj.balance=obj.lastTransaction=0:obj.balance=obj.lastTransaction=v;
	obj.__proto__=method;
	return obj
}

var p1 = piggyBank();
var p2 = piggyBank();
var p3 = piggyBank(10);
p1.deposit(10)
p2.deposit(50);
p1.deposit(101);
p2.withdraw(10);
p1.statement()
p2.statement()
p3.statement()