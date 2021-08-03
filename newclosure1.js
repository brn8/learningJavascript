
function main(){
	var balance = 0;
	var lastTransaction = 0;

	function deposit(v){
		balance=balance+v;
		lastTransaction=v;
	}
	function withdraw(v){
		balance=balance-v;
		lastTransaction=v;
	}
	function statement(){
		console.log("Balance:",balance);
		console.log('Transaction', lastTransaction);
	}
	this.deposit=deposit;
	this.withdraw=withdraw;
	this.statement=statement;
}
var p1 = new main();
p1.deposit(100);
p1.deposit(10);
p1.statement();


