const repeatString = function(string, times) {
	let str = '';
	if (times < 0){
		return "ERROR";
	}
	for(let i = 0; i < times; i++){
		str = str + string;
	}
	return str;
};

// Do not edit below this line
module.exports = repeatString;
