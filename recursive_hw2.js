/*Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


count7(717) → 2
count7(7) → 1
count7(123) → 0*/

function countSeven(num){
	// if(num == 0){
	// 	return 0
	// }
	// if(num%10 == 7){
	// 	return 1 + countSeven(Math.trunc(num/10))
	// }
	// else{
	// 	return 0 + countSeven(Math.trunc(num/10))
	// }
	if(num == 0){
		return 0
	}
	var count = 0
	if(num%10 == 7){
		count = 1
	}
		return count + countSeven(Math.trunc(num/10))
	
}
console.log(countSeven(5))
