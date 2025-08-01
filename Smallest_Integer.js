//Find the smallest integer in the array

function findSmallestInt(arr){
	let lowest = arr[0];

	for(let i=1; i<arr.length; i++){
		if (lowest > arr[i]){
			lowest = arr[i];
		}
	}
	return lowest;
}

let array = [2,4,5,9,12,1];
console.log(findSmallestInt(array));
