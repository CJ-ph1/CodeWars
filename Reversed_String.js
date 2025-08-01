// Reversed a string: "World" -> "dlorW"

function solution(str){
	let word = "";
	for (let i=str.length-1; i>=0; i--){
		word += str[i];
	}
	return word;
}

solution("World");
