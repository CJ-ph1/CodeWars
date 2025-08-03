// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str){
	let x=0, y=0;
	for (let i=0; i<str.length; i++){
		let hold = str[i].toLowerCase();
		if (hold == "x"){
			x++;
		} else if (hold == "o"){
			y++;
		} else {
		}
	}
	if (x == y){
		return true;
	} else {
		return false;
	}
}

let input = "xoxoxo";
console.log(XO(input));
