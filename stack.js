class Stack{
	constructor(){
		this.items=[];
		this.count=0;
	}
	push(element){
		this.items[this.count]=element;
		this.count=this.count+1;
		console.log(this.items)
	}
	length(){
		console.log(this.count);
	}
	peek(){
		console.log(this.items[this.count-1])
	}
	isEmpty(){
		console.log(this.count===0);
	}
	pop(){
		this.count=this.count-1;
		console.log(this.items.pop());
	}
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.length();
// stack.peek();
// stack.isEmpty();
stack.pop();


