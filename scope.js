// var a = 0;
// console.log(a);


/*What happens during run time?
1. The compiler tells the scope that there is an variable a.
2. Scope know that there is an variable called a 
3. Then flocoman does the tracing, and on line 1, it ask the scope if there is an variable and scope knows that there is variable a so it send the memory address of that variable to the flocoman.
4. flocoman then goes to that memeory address and gets it's RHS value;
5. flocoman then moves to next line and now it knows that there is an variable a whose RHS values is 0. 
6. Lastly it will print that values in the console. 
*/
//-----------------------------------------------------------------------

// function f(){
// 	console.log("Hello World");
// }

// f()
/*What happens during run time?
1. The compiler tells the scope that there is a global variable f.
2. Scope knows that there is variable f.
3. Then flocoman does the tracing, and on the line 1, it knows that it's function so flocoman gets out of the function. 
4. flocoman then moves to the last line of the code, and ask scope if you know about variable f and scope knows that there is a variable f so it send memory address of that variable to the flocoman.
5. flocoman the goes to that memory address and it finds out that it's an function.
6. flocoman then goes inside that function and lastly it will prints out whatever it returns and in this case it will print out "hello world". 

*/
//-------------------------------------------------------------------------
// function f(a){
// 	var b = 2
// 	return a+b+c
// }
// var c = 1;
// console.log(f(2))

/*What happens during run time?
1. The compiler tells the scope that there is a global variable f, c and function variable a, b.
2. Scope knows about those variables.
3. Then flocoman does the tracing, and on the line 1, it knows that it's function so flocoman gets out of the function. 
4. flocoman then moves to the line 5, and ask scope if you know about variable c and scope knows that there is variable c so it send the memory address of that variable to the flocoman.
5. flocoman then goes to that memeory address and gets it's RHS value;
6. Now flocoman moves to next line and ask scope if you know about variable f and scope knows that there is an variable f so it send the memory address of that variable to the flocoman.
7. flocoman the goes to that memory address and it finds out that it's an function.
8. flocoman notice that function has an argument and that argument is an variable so it ask the scope if you know
about that variable and scope knows that there is variable a so it send the memory address of that variable to the flocoman. 
9. flocoman then goes to that memeory address and gets it's RHS value;
10. flocoman then moves inside the function and ask scope if you know about variable b and scope knows about variable b so it sends the memory address of the variable.
11. flocoman then goes to that memeory address and gets it's RHS value;
12. flocoman moves to next line and it know that rhs value of a, b, and c so it does the calculation and lastly it's prints the value
*/
//---------------------------------------------------------------------
// function f(a){
// 	var b = 2
// 	return a+b+c
// }
// console.log(f(2))
// var c = 1;

/*What happens during run time?
1. The compiler tells the scope that there is a global variable f, c and function variable a, b.
2. Scope knows about those variables.
3. Then flocoman does the tracing, and on the line 1, it knows that it's function so flocoman gets out of the function. 
4. Now flocoman moves to next line and ask scope if you know about variable f and scope knows that there is an variable f so it send the memory address of that variable to the flocoman.
5. flocoman the goes to that memory address and it finds out that it's an function.
6. flocoman notice that function has an argument and that argument is an variable so it ask the scope if you know
about that variable and scope knows that there is variable a so it send the memory address of that variable to the flocoman. 
7. flocoman then goes to that memeory address and gets it's RHS value;
8. flocoman then moves inside the function and ask scope if you know about variable b and scope knows about variable b so it sends the memory address of the variable.
9. flocoman then goes to that memeory address and gets it's RHS value;
12. flocoman moves to next line and it know that rhs value of a, b, but not c.
13. So lastly it will print out not a number since c is empty.
*/
//------------------------------------------------------------

function f(a){
	b = 2
	return a + b;

}
console.log(f(2));
console.log(b)

/*What happens during run time?
1. The compiler tells the scope that there is a global variable f and function variable a, b.
2. Scope knows about those variables.
3. Then flocoman does the tracing, and on the line 1, it knows that it's function so flocoman gets out of the function. 
4. Now flocoman moves to next line and ask scope if you know about variable f and scope knows that there is an variable f so it send the memory address of that variable to the flocoman.
5. flocoman the goes to that memory address and it finds out that it's an function.
6. flocoman notice that function has an argument and that argument is an variable so it ask the scope if you know
about that variable and scope knows that there is variable a so it send the memory address of that variable to the flocoman. 
7. flocoman then goes to that memeory address and gets it's RHS value;
8. flocoman then moves inside the function and ask scope if you know that b and scope doesn't know about b. 
9. In that case, flocoman creat a gloabal variable b that has a value 2.
10. Now flocoman moves to next line and now it knows the rhs value of a, b so it does the calculation and lastly it's prints the value.
11. flocoman moves to next line and it know the b and it's rhs values of b so it will print that value. 
*/

//-----------------------------------------------------------