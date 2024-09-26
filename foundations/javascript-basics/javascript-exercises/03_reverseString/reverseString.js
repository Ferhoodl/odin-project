const reverseString = function(word) {
	let revString = '';
	for(let i = word.length; i > 0; i--){
		revString += word[i - 1];
	}
	return revString;
};

// Do not edit below this line
module.exports = reverseString;
