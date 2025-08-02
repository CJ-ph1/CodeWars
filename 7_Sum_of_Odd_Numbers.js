// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// .....
//
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// Ex. 1 --> 1
//     2 --> 3 + 5 = 8


function rowSumOddNumbers(n){
	let holdVal = 0;
	let sum = 0;

	for (let i=0; i<n; i++){
		holdVal = n*n+i;
	}
	let newHold = holdVal-(2*n);
	
	for (let i=holdVal; i>newHold; i--){
		if (i&2!=0){
			sum += i;
		}
	}
	return sum;
}

let Input = 34;
console.log(rowSumOddNumbers(Input));
