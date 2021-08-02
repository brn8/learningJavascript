
function deposit(value){
	this.balance=this.balance+value
	this.lt=value
}

function withdraw(value){
	if(this.balance>value){
		this.balance=this.balance-value;
		this.lt=value*-1
	}
}

function statement(){
	console.log("Current balance:",this.balance);
	console.log("Last transaction:",this.lt);
}

function piggyBank(){ 
	var obj = {};
	obj.balance=0;
	obj.lastTransaction=0;
	obj.deposit=deposit;
	obj.withdraw=withdraw;
	obj.statement=statement;
	return obj
}

var p1 = piggyBank();
var p2 = piggyBank();
p1.deposit(10)
p2.deposit(50);
p1.deposit(101);
p2.withdraw(10);
p1.statement()
p2.statement()