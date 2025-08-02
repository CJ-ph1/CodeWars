// Example:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s){
	let store = "";

	for(let i=0; i<s.length; i++){
		if (i>0){
			store += "-";
		}
		for (let j=0; j<=i; j++){
			if (j==0){
				store += s[i].toUpperCase();
			} else {
				store += s[i].toLowerCase();
			}
		}
	}
	return store;
}

let anyStr = "abcDeFG";
console.log(accum(anyStr));
