var piggybank = {};
piggybank.balance=0;
piggybank.lastTransaction=0;
piggybank.deposit=function(val){
	piggybank.balance=piggybank.balance+val;
	piggybank.lastTransaction=val;
}
piggybank.withdraw=function(val){
	if(piggybank.balance>val){
		piggybank.balance=piggybank.balance-val;
		piggybank.lastTransaction=val*-1;
	}
}
piggybank.statement=function(){
	console.log(piggybank.balance);
	console.log(piggybank.lastTransaction);
}

piggybank.deposit(150);
piggybank.withdraw(100);
piggybank.statement();

