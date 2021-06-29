function f (a){
	if(a==2){
		let c=1;
	}
	else {
		var c = 2
	}
	return a+c //3
}
console.log(f(1));

/*
1. The compiler tell the scope that there is a global variable f and function variable a, and c.
2. flocoman does the tracing on line 1, it knows that it's function so it moves to line 10.
3. Then flocoman ask, do you know variable f and scope knows that there is a variable f so it send the memory address.
4. Flocoman goes to that memory address and it knows that it's a function
5. Then flocoman ask, do you know variable a and scope knows that there is a variable a so it send the memory address.
6. Flocoman goes to that memeory address and gets its rhs value.
7. Flocoman goes to line 2 and check if the condition is true and in this case, it's false
8. Then it moves to next statement, and ask scope if you know about variable c and scope knows that there is a variable c so it send the memory address.
9. Then flocoman goes to that memeory address and gets its rhs value and assigned the rhs value to the function block.
10. Then when it comes to line 8, since rhs value of c is inside function block, it knows its rhs value of that variable and therefore it return 3. 
*/

